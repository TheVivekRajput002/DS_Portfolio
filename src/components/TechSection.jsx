import { AlertCircleIcon, BadgeCheckIcon, CheckIcon } from "lucide-react"

import { Badge}  from "../components/ui/badge"

export default function TechSection() {
    return (
        <div className="flex flex-col items-center gap-2">
            <div className="flex w-full flex-wrap gap-3">
                <Badge
                    variant="secondary"
                    className="bg-blue-500 text-white dark:bg-blue-600"
                >
                    <BadgeCheckIcon />
                    AIML Engineer
                </Badge>
                <Badge variant="outline">Python</Badge>
                <Badge variant="outline">NumPy</Badge>
                <Badge variant="outline">Pandas</Badge>
                <Badge variant="outline">TensorFlow</Badge>
                <Badge variant="outline">PyTorch</Badge>
                <Badge variant="outline">Matplotlib</Badge>
                <Badge variant="outline">XgBoost</Badge>
                <Badge variant="outline">Scipy</Badge>
                <Badge variant="outline">Keras</Badge>
            </div>
            <div className="flex w-full flex-wrap gap-2 mt-4">
                <Badge>Fullstack Developer</Badge>
                <Badge variant="outline">HTML</Badge>
                <Badge variant="outline">CSS</Badge>
                <Badge variant="outline">Javascript</Badge>
                <Badge variant="outline">React.js</Badge>
                <Badge variant="outline">GSAP</Badge>
                <Badge variant="outline">C++</Badge>
                <Badge variant="outline">MySQL</Badge>
            </div>
            <div className="flex w-full flex-wrap gap-2 mt-4">
                <Badge>UI/UX Designer</Badge>
                <Badge variant="outline">Figma</Badge>
                <Badge variant="outline">Canva</Badge>
      
            </div>
        </div>
    )
}
