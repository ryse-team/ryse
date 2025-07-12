import { ref, computed, onMounted, onUnmounted } from "vue";

export function useGlitchEffect() {
    const isGlitching = ref(false);
    const glitchData = ref({
        layer1: { x: 0, y: 0, clipTop: 0, clipBottom: 100 },
        layer2: { x: 0, y: 0, clipTop: 0, clipBottom: 100 },
        layer3: { x: 0, y: 0, clipTop: 0, clipBottom: 100 },
    });

    // computed styles for glitch layers
    const glitchLayersStyles = computed(() => [
        {
            transform: `translate(${glitchData.value.layer1.x}px, ${glitchData.value.layer1.y}px)`,
            clipPath: `inset(${glitchData.value.layer1.clipTop}% 0 ${100 - glitchData.value.layer1.clipBottom}% 0)`,
            filter: "hue-rotate(180deg) saturate(2)",
            mixBlendMode: "screen",
        },
        {
            transform: `translate(${glitchData.value.layer2.x}px, ${glitchData.value.layer2.y}px)`,
            clipPath: `inset(${glitchData.value.layer2.clipTop}% 0 ${100 - glitchData.value.layer2.clipBottom}% 0)`,
            filter: "hue-rotate(90deg) saturate(1.5)",
            mixBlendMode: "screen",
        },
        {
            transform: `translate(${glitchData.value.layer3.x}px, ${glitchData.value.layer3.y}px)`,
            clipPath: `inset(${glitchData.value.layer3.clipTop}% 0 ${100 - glitchData.value.layer3.clipBottom}% 0)`,
            filter: "hue-rotate(270deg) saturate(1.8)",
            mixBlendMode: "screen",
        },
    ]);

    function generateGlitchDisplacement() {
        const intensity = 15 + Math.random() * 25;

        const strips = [];
        let currentY = 0;

        while (currentY < 100) {
            const stripHeight = 5 + Math.random() * 15;
            strips.push({
                top: currentY,
                bottom: Math.min(currentY + stripHeight, 100),
                displacement: (Math.random() - 0.5) * intensity * 2,
            });
            currentY += stripHeight + Math.random() * 10;
        }

        // reset glitch data for all layers before assigning new strips
        glitchData.value.layer1 = { x: 0, y: 0, clipTop: 0, clipBottom: 100 };
        glitchData.value.layer2 = { x: 0, y: 0, clipTop: 0, clipBottom: 100 };
        glitchData.value.layer3 = { x: 0, y: 0, clipTop: 0, clipBottom: 100 };

        strips.forEach((strip, index) => {
            const layerKey = `layer${(index % 3) + 1}`;

            if (Math.random() > 0.6) {
                glitchData.value[layerKey] = {
                    x: strip.displacement,
                    y: (Math.random() - 0.5) * 8,
                    clipTop: strip.top,
                    clipBottom: strip.bottom,
                };
            }
        });
    }

    let glitchInterval = null;

    function triggerGlitch() {
        if (isGlitching.value) return;

        generateGlitchDisplacement();
        isGlitching.value = true;

        const duration = 100 + Math.random() * 200;
        setTimeout(() => {
            isGlitching.value = false;
        }, duration);
    }

    function startGlitchSystem() {
        // Initial glitch after exactly 500ms
        setTimeout(() => {
            triggerGlitch();
        }, 500);

        function scheduleNextGlitch() {
            const delay = 1500 + Math.random() * 3000;
            glitchInterval = setTimeout(() => {
                if (Math.random() < 0.8) {
                    triggerGlitch();
                }
                scheduleNextGlitch();
            }, delay);
        }

        scheduleNextGlitch();
    }

    function stopGlitchSystem() {
        if (glitchInterval) {
            clearTimeout(glitchInterval);
            glitchInterval = null;
        }
    }

    onMounted(() => {
        startGlitchSystem();
    });

    onUnmounted(() => {
        stopGlitchSystem();
    });

    return {
        isGlitching,
        glitchLayersStyles,
        triggerGlitch,
    };
}
