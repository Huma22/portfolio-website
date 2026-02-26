"use client";

import { useEffect, useRef } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const TOTAL_FRAMES = 120;
const FRAME_PREFIX = "/sequence/frame_";
const FRAME_SUFFIX = "_delay-0.066s.png";

function getFramePath(index: number): string {
    const padded = String(index).padStart(3, "0");
    return `${FRAME_PREFIX}${padded}${FRAME_SUFFIX}`;
}

interface ScrollyCanvasProps {
    children?: React.ReactNode;
}

export default function ScrollyCanvas({ children }: ScrollyCanvasProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const currentFrameRef = useRef(0);
    const animFrameRef = useRef<number>(0);

    // Scroll tracking tied to the container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // --- Canvas draw utility ---
    const drawFrame = (ctx: CanvasRenderingContext2D, img: HTMLImageElement) => {
        const canvas = ctx.canvas;
        const cw = canvas.clientWidth;
        const ch = canvas.clientHeight;
        const iw = img.naturalWidth;
        const ih = img.naturalHeight;

        // Keep the sequence fully covering the viewport.
        const scale = Math.max(cw / iw, ch / ih);
        const sw = iw * scale;
        const sh = ih * scale;

        const dx = (cw - sw) / 2;
        const dy = (ch - sh) / 2;

        ctx.clearRect(0, 0, cw, ch);
        ctx.fillStyle = "#121212";
        ctx.fillRect(0, 0, cw, ch);
        ctx.drawImage(img, dx, dy, sw, sh);
    };

    // --- Preload all frames ---
    useEffect(() => {
        const images: HTMLImageElement[] = new Array(TOTAL_FRAMES);

        for (let i = 0; i < TOTAL_FRAMES; i++) {
            const img = new Image();
            img.src = getFramePath(i);
            img.onload = () => {
                images[i] = img;
                // Draw first frame once it's ready
                if (i === 0) {
                    const canvas = canvasRef.current;
                    if (canvas) {
                        const ctx = canvas.getContext("2d");
                        if (ctx) drawFrame(ctx, img);
                    }
                }
            };
            imagesRef.current[i] = img;
        }

        // Handle canvas resize
        const handleResize = () => {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const dpr = window.devicePixelRatio || 1;
            const cssWidth = canvas.clientWidth;
            const cssHeight = canvas.clientHeight;
            canvas.width = Math.round(cssWidth * dpr);
            canvas.height = Math.round(cssHeight * dpr);
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            const current = imagesRef.current[currentFrameRef.current];
            if (current?.complete) drawFrame(ctx, current);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // --- Scroll → frame index ---
    useMotionValueEvent(scrollYProgress, "change", (progress) => {
        const frameIndex = Math.min(
            Math.floor(progress * (TOTAL_FRAMES - 1)),
            TOTAL_FRAMES - 1
        );

        if (frameIndex === currentFrameRef.current) return;
        currentFrameRef.current = frameIndex;

        cancelAnimationFrame(animFrameRef.current);
        animFrameRef.current = requestAnimationFrame(() => {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            const img = imagesRef.current[frameIndex];
            if (img?.complete) drawFrame(ctx, img);
        });
    });

    return (
        <div
            ref={containerRef}
            style={{ height: "500vh" }}
            className="relative"
        >
            {/* Sticky viewport */}
            <div className="sticky top-0 w-full h-screen overflow-hidden">
                {/* Canvas */}
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full"
                    style={{ background: "#121212" }}
                />

                {/* Edge feathering to seamlessly blend the zoomed-out canvas into the background */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        boxShadow: "inset 0 0 150px 100px #121212"
                    }}
                />

                {/* Overlay content (text sections) rendered as children */}
                {children}

                {/* Bottom vignette to blend into sections below */}
                <div
                    className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
                    style={{
                        background:
                            "linear-gradient(to bottom, transparent 0%, #121212 100%)",
                    }}
                />
            </div>
        </div>
    );
}
