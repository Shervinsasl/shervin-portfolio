import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const experience = [
  {
    title: "President, Computer Science Club",
    company: "Irvine Valley College",
    timeframe: "Sep 2023 — May 2024",
    description:
      "Led weekly coding sessions in C++ and Python, built quizzes/tutorials, and coordinated communication for 100 students and faculty.",
  },
  {
    title: "Analog & Embedded Systems",
    company: "Coursework + Independent",
    timeframe: "2024 — Present",
    description:
      "ESP32 builds with ultrasonic sensors and PWM motor control, plus MOSFET/BJT analysis, RC/RLC modeling, and beginner PCB design in KiCad.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-10 px-5 py-10 sm:px-8 sm:py-14">
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">
          About
        </p>
        <h1 className="text-3xl font-semibold">Building with intent</h1>
        <p className="text-lg text-muted-foreground">
          I&apos;m Shervin Shahidi, a UCLA computer science student (expected
          May 2026) who likes blending software with hardware. My recent work
          spans Pyglet game engines, Three.js experiments, React + Django apps,
          and ESP32 robotics.
        </p>
      </div>

      <Card className="border-border/70 bg-card/70">
        <CardContent className="space-y-4 p-6">
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">Python</Badge>
            <Badge variant="outline">JavaScript</Badge>
            <Badge variant="outline">C/C++</Badge>
            <Badge variant="outline">React</Badge>
            <Badge variant="outline">Django REST Framework</Badge>
            <Badge variant="outline">Three.js</Badge>
            <Badge variant="outline">Node.js</Badge>
            <Badge variant="outline">MQTT</Badge>
            <Badge variant="outline">MicroPython</Badge>
            <Badge variant="outline">ESP32</Badge>
            <Badge variant="outline">KiCad</Badge>
            <Badge variant="outline">Git</Badge>
          </div>
          <p className="text-muted-foreground">
            I like end-to-end builds: define the constraints, prototype quickly,
            and ship something that feels real—whether it&apos;s a web app, a
            3D experiment, or an embedded demo.
          </p>
        </CardContent>
      </Card>

      <div className="grid gap-4 sm:grid-cols-3">
        {[
          {
            label: "What I value",
            text: "Clear documentation, feedback loops, and learning by building.",
          },
          {
            label: "How I work",
            text: "Break problems down, pair up when blocked, and iterate visibly.",
          },
          {
            label: "Where I help",
            text: "Full-stack web apps, game/graphics experiments, and embedded prototypes.",
          },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-border/70 bg-muted/40 px-4 py-3"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {item.label}
            </p>
            <p className="mt-2 text-sm text-foreground">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <div className="grid gap-3">
          {experience.map((item) => (
            <div
              key={item.title}
              className="glass-panel grid gap-2 rounded-xl p-4 sm:grid-cols-[1.2fr_0.8fr]"
            >
              <div>
                <p className="text-sm font-semibold text-muted-foreground">
                  {item.timeframe}
                </p>
                <p className="text-lg font-semibold">
                  {item.title} @ {item.company}
                </p>
              </div>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
