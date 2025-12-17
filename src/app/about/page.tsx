import { Reveal } from "@/components/Reveal";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-10 px-5 py-10 sm:px-8 sm:py-14">
      <Reveal className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">
          About
        </p>
        <h1 className="text-3xl font-semibold">I build systems end-to-end</h1>
        <p className="text-lg text-muted-foreground">
          I&apos;m Shervin Shahidi, a Computer Science student at UCLA (expected May 2026).
          I like taking ideas from UI to low-level: Three.js games with real-time camera
          control, React + Django REST platforms, and embedded builds on ESP32/Arduino
          with MQTT, sensors, and PWM motor control.
        </p>
      </Reveal>

      <Reveal highlight>
        <Card className="border-border/70 bg-card/70">
          <CardContent className="space-y-3 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              What I build
            </p>
            <ul className="space-y-2 text-sm text-foreground">
              <li className="leading-relaxed">
                3D Snake game with real-time graphics, camera transforms, and input loops.
              </li>
              <li className="leading-relaxed">
                Python tower defense engine tuned for performance and predictable simulation.
              </li>
              <li className="leading-relaxed">
                Embedded prototypes with MQTT messaging, PWM motor control, and sensor feedback.
              </li>
            </ul>
          </CardContent>
        </Card>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2">
        <Reveal highlight>
          <Card className="border-border/70 bg-card/70">
            <CardContent className="space-y-3 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                How I think
              </p>
              <p className="text-sm text-foreground">
                I break problems into systems, prototype early, and iterate with real constraints.
                I enjoy tracing how UI changes hit APIs, event loops, rendering pipelines, and
                hardware limits.
              </p>
              <p className="text-sm text-muted-foreground">
                Comfortable across C/C++, Python, JavaScript/TypeScript, React, Django, Three.js,
                and embedded tools like ESP32, MicroPython, MQTT, and KiCad.
              </p>
            </CardContent>
          </Card>
        </Reveal>

        <Reveal highlight delay={0.05}>
          <Card className="border-border/70 bg-card/70">
            <CardContent className="space-y-3 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Interests
              </p>
              <p className="text-sm text-foreground">
                I&apos;m actively learning machine learning and AI, focused on how intelligent
                models integrate into real systems—interactive apps, systems engineering, and
                robotics/embedded contexts.
              </p>
              <p className="text-sm text-muted-foreground">
                Building the math and systems foundations now; aiming to apply ML in grounded,
                system-aware ways rather than as a bolt-on feature.
              </p>
            </CardContent>
          </Card>
        </Reveal>
      </div>

      <Reveal highlight>
        <Card className="border-border/70 bg-card/70">
          <CardContent className="flex flex-col gap-2 p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Languages
            </p>
            <p className="text-sm text-foreground">
              Fluent in English, Turkish, and Farsi.
            </p>
          </CardContent>
        </Card>
      </Reveal>

      <Reveal highlight>
        <Card className="border-border/70 bg-card/70">
          <CardContent className="space-y-2 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Looking ahead
            </p>
            <p className="text-sm text-foreground">
              Actively seeking Software Engineering and Embedded/Systems internships. I add value
              where teams need ownership across layers, clear reasoning, and systems thinking—not
              just surface-level features.
            </p>
          </CardContent>
        </Card>
      </Reveal>
    </div>
  );
}
