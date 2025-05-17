import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Users, Globe, Zap, Lock, Palette } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Code,
      title: "Code Editor",
      description: "Powerful Monaco editor with syntax highlighting for multiple languages",
    },
    {
      icon: Users,
      title: "Real-time Collaboration",
      description: "Work together with your team in real-time, see who's online",
    },
    {
      icon: Globe,
      title: "Accessible Anywhere",
      description: "Access your code from any device with an internet connection",
    },
    {
      icon: Zap,
      title: "Instant Updates",
      description: "See changes as they happen with low-latency synchronization",
    },
    {
      icon: Lock,
      title: "Secure Rooms",
      description: "Private rooms with unique IDs for your team collaboration",
    },
    {
      icon: Palette,
      title: "Dark Mode",
      description: "Easy on the eyes with a beautiful dark theme interface",
    },
  ]

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          LiveCodeShare provides everything you need for seamless code collaboration
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <div className="bg-zinc-800 w-10 h-10 rounded-md flex items-center justify-center mb-2">
                <feature.icon className="h-5 w-5" />
              </div>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription className="text-zinc-400">{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}
