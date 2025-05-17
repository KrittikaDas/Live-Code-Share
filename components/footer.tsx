import { Github, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <div className="bg-white rounded-full p-2 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-black"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <span className="font-bold text-lg">LiveCodeShare</span>
            </div>
            <p className="text-zinc-400 mt-2 text-sm">Built by Akshit Dhiman for the developer community</p>

          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <div>
              <h3 className="font-semibold mb-2">Product</h3>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Company</h3>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Legal</h3>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t border-zinc-800">
          <p className="text-zinc-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} LiveCodeShare. All rights reserved.
          </p>
         <div className="flex space-x-4">
          <a href="https://github.com/Akshit-dhiman" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          </a>
          <a href="https://x.com/akshit19630353" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Button>
          </a>
          <a href="mailto:akshithdh@gmail.com">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Mail className="h-4 w-4" />
              <span className="sr-only">Email</span>
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/akshithdh/" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7 0h4.76v2.24h.07c.66-1.25 2.28-2.57 4.7-2.57 5.03 0 5.96 3.3 5.96 7.59V24h-5v-7.23c0-1.73-.03-3.95-2.41-3.95-2.42 0-2.79 1.89-2.79 3.83V24h-5V8z" />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </Button>
          </a>
          <a href="https://www.instagram.com/akshitxxdhiman/" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.4.5.5.2.9.5 1.3.9.4.4.7.8.9 1.3.2.4.4 1.2.5 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.5 2.4-.2.5-.5.9-.9 1.3-.4.4-.8.7-1.3.9-.4.2-1.2.4-2.4.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.4-.5-.5-.2-.9-.5-1.3-.9-.4-.4-.7-.8-.9-1.3-.2-.4-.4-1.2-.5-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-2 .5-2.4.2-.5.5-.9.9-1.3.4-.4.8-.7 1.3-.9.4-.2 1.2-.4 2.4-.5C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 .1c-1.4.1-2.4.3-3.3.7-.9.4-1.6.9-2.3 1.6C1.1 3 0.6 3.7.2 4.6c-.4.9-.6 1.9-.7 3.3C-.1 8.3 0 8.7 0 12c0 3.3 0 3.7.1 5 .1 1.4.3 2.4.7 3.3.4.9.9 1.6 1.6 2.3.7.7 1.4 1.2 2.3 1.6.9.4 1.9.6 3.3.7 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.4-.1 2.4-.3 3.3-.7.9-.4 1.6-.9 2.3-1.6.7-.7 1.2-1.4 1.6-2.3.4-.9.6-1.9.7-3.3.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.4-.3-2.4-.7-3.3-.4-.9-.9-1.6-1.6-2.3-.7-.7-1.4-1.2-2.3-1.6-.9-.4-1.9-.6-3.3-.7C15.7 0 15.3 0 12 0zm0 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2zm0 10.2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm6.4-11.6c0 .8-.6 1.4-1.4 1.4-.8 0-1.4-.6-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4z" />
              </svg>
              <span className="sr-only">Instagram</span>
            </Button>
          </a>
        </div>

        </div>
      </div>
    </footer>
  )
}
