import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LogIn } from "lucide-react"
import { useState } from "react"

export default function LoginForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle login logic here
        console.log("Login:", email, password)
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4 p-6">
            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <Button type="submit" className="w-full bg-warlocks-blue hover:bg-warlocks-blue/90">
                <LogIn className="mr-2 h-4 w-4" /> Login
            </Button>
        </form>
    )
}

