/* eslint-disable tailwindcss/classnames-order */

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { ChevronsUpDown } from "lucide-react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import * as z from "zod"

import { socialMediaConfig } from "@/config/social-media"
import { cn } from "@/lib/utils"
import { updateDevMode } from "@/hooks/slices/devModeSlice"
import { updateHello } from "@/hooks/slices/helloToolSlice"
import { Icons } from "@/components/icons"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertDescription,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertTitle,
  AspectRatio,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button as ButtonShadcnUi,
  Calendar,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Checkbox,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuPortal,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  InputShadcnUi,
  Label,
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarPortal,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Progress,
  RadioGroup,
  RadioGroupItem,
  ScrollArea,
  ScrollBar,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  Separator,
  Skeleton,
  Slider,
  Switch,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  Toaster,
  Toggle,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  badgeVariants,
  buttonVariants,
  navigationMenuTriggerStyle,
  toast,
  toggleVariants,
  useFormField,
  useToast,
  type ToastActionElement,
  type ToastProps,
} from "@/components/ui"

import { ArrowRightIcon } from "@radix-ui/react-icons"

import { siteConfig } from "@/config/site"
import { ExamplesNav } from "@/components/examples-nav"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"

import DashboardPage from "@/app/examples/dashboard/page"

export function Examples() {
  return (
    <div className="container relative">
      <PageHeader className="pb-8">
        <Link
          href="/docs/changelog"
          className="bg-muted inline-flex items-center rounded-lg px-3 py-1 text-sm font-medium"
        >
          🎉 <Separator className="mx-2 h-4" orientation="vertical" />{" "}
          <span className="sm:hidden">Style, a new CLI and more.</span>
          <span className="hidden sm:inline">
            Introducing Style, a new CLI and more.
          </span>
          <ArrowRightIcon className="ml-1 h-4 w-4" />
        </Link>
        <PageHeaderHeading>Build your component library.</PageHeaderHeading>
        <PageHeaderDescription>
          Beautifully designed components that you can copy and paste into your
          apps. Accessible. Customizable. Open Source.
        </PageHeaderDescription>
        <div className="flex w-full items-center space-x-4 pb-8 pt-4 md:pb-10">
          <Link href="/docs" 
          >
            Get Started
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
          >
            <Icons.gitHub className="mr-2 h-4 w-4" />
            GitHub
          </Link>
        </div>
      </PageHeader>
      <ExamplesNav className="[&>a:first-child]:text-primary" />
      <section className="border-primary dark:border-muted space-y-8 overflow-hidden rounded-lg border-2 md:hidden">
        <Image
          src="/examples/dashboard-light.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="block dark:hidden"
        />
        <Image
          src="/examples/dashboard-dark.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="hidden dark:block"
        />
      </section>
      <section className="hidden md:block">
        <div className="bg-background overflow-hidden rounded-lg border shadow">
          <DashboardPage />
        </div>
      </section>
    </div>
  )
}

export function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-72 w-max border-y">
      <div className="space-y-3 p-3">
        <Avatar className="pulsate-fwd hidden h-[30px] w-[30px] 2xl:flex">
          <AvatarImage src="/user-15.webp" alt="@shadcn" />
          <AvatarFallback>15</AvatarFallback>
        </Avatar>
        <Avatar className="pulsate-fwd hidden h-[30px] w-[30px] 2xl:flex">
          <AvatarImage src="/user-14.webp" alt="@shadcn" />
          <AvatarFallback>14</AvatarFallback>
        </Avatar>
        <Avatar className="pulsate-fwd hidden h-[30px] w-[30px] xl:flex">
          <AvatarImage src="/user-13.webp" alt="@shadcn" />
          <AvatarFallback>13</AvatarFallback>
        </Avatar>
        <Avatar className="pulsate-fwd hidden h-[30px] w-[30px] xl:flex">
          <AvatarImage src="/user-12.webp" alt="@shadcn" />
          <AvatarFallback>12</AvatarFallback>
        </Avatar>
        <Avatar className="pulsate-fwd hidden h-[30px] w-[30px] lg:flex">
          <AvatarImage src="/user-11.webp" alt="@shadcn" />
          <AvatarFallback>11</AvatarFallback>
        </Avatar>
        <Avatar className="pulsate-fwd hidden h-[30px] w-[30px] md:flex">
          <AvatarImage
            src="/chainswap-x-force-by-deadpool.jpeg"
            alt="@shadcn"
          />
          <AvatarFallback>10</AvatarFallback>
        </Avatar>
        <Avatar className="pulsate-fwd hidden h-[30px] w-[30px] sm:flex">
          <AvatarImage src="/suzume-no-tojimari.jpeg" alt="@shadcn" />
          <AvatarFallback>9</AvatarFallback>
        </Avatar>
        <Avatar className="pulsate-fwd hidden h-[30px] w-[30px] sm:flex">
          <AvatarImage src="/one-punch-man.png" alt="@shadcn" />
          <AvatarFallback>8</AvatarFallback>
        </Avatar>
        <Avatar className="pulsate-fwd hidden h-[30px] w-[30px] md:flex">
          <AvatarImage src="/saturo-freeking-gojo.jpeg" alt="@shadcn" />
          <AvatarFallback>7</AvatarFallback>
        </Avatar>
        <Avatar className="pulsate-fwd hidden h-[30px] w-[30px] md:flex">
          <AvatarImage src="/night-shy.jpeg" alt="@shadcn" />
          <AvatarFallback>6</AvatarFallback>
        </Avatar>
        <Avatar className="pulsate-fwd hidden h-[30px] w-[30px] lg:flex">
          <AvatarImage src="/curse-king-sukuna.png" alt="@shadcn" />
          <AvatarFallback>5</AvatarFallback>
        </Avatar>
        <Avatar className="pulsate-fwd hidden h-[30px] w-[30px] lg:flex">
          <AvatarImage src="/nezuukoo-chaaannn.png" alt="@shadcn" />
          <AvatarFallback>4</AvatarFallback>
        </Avatar>
        <Avatar className="pulsate-fwd h-[30px] w-[30px]">
          <AvatarImage src="/user-two.jpg" alt="@shadcn" />
          <AvatarFallback>3</AvatarFallback>
        </Avatar>
        <Avatar className="pulsate-fwd h-[30px] w-[30px]">
          <AvatarImage src="/user-three.jpg" alt="@shadcn" />
          <AvatarFallback>2</AvatarFallback>
        </Avatar>
        <Avatar className="pulsate-fwd h-[30px] w-[30px]">
          <AvatarImage src="/user-four.jpg" alt="@shadcn" />
          <AvatarFallback>1</AvatarFallback>
        </Avatar>
      </div>
    </ScrollArea>
  )
}

interface github_repo_props {
  title: string,
  description?: string
}

const github_repos = [
  {
    title: "ackee",
    description: "Self-hosted, Node.js based analytics tool for those who care about privacy."
  },
  {
    title: "adobe-alternatives",
    description: "A list of alternatives for Adobe software"
  },
  {
    title: "affine",
    description: "There can be more than Notion and Miro. AFFiNE is a next-gen knowledge base that brings planning, sorting and creating all together. Privacy first, open-source, customizable and ready to use. "
  },
  {
    title: "ai-photo-restorer",
    description: "null"
  },
  {
    title: "ai_summerizer",
    description: "This will be a step forward for me as ManFromEarth"
  },
  {
    title: "aladdin",
    description: ":pancakes: Pancake main features (farms, pools, IFO, lottery, profiles)"
  },
  {
    title: "aladdin-website-builder",
    description: "Low code project to build admin panels, internal tools, and dashboards. Integrates with 15+ databases and any API."
  },
  {
    title: "algo",
    description: "Set up a personal VPN in the cloud"
  },
  {
    title: "analytics",
    description: "Simple, open-source, lightweight (< 1 KB) and privacy-friendly web analytics alternative to Google Analytics."
  },
  {
    title: "animate.css",
    description: "🍿 A cross-browser library of CSS animations. As easy to use as an easy thing."
  },
  {
    title: "anime",
    description: "JavaScript animation engine"
  },
  {
    title: "ansible",
    description: "Ansible is a radically simple IT automation platform that makes your applications and systems easier to deploy and maintain. Automate everything from code deployment to network configuration to cloud management, in a language that approaches plain English, using SSH, with no agents to install on remote systems. https://docs.ansible.com."
  },
  {
    title: "ant-media-server",
    description: "Ant Media Server is a live streaming engine software that provides adaptive, ultra low latency streaming by using WebRTC technology with ~0.5 seconds latency. Ant Media Server is auto-scalable and it can run on-premise or on-cloud."
  },
  {
    title: "apostrophe",
    description: "Apostrophe is a full-featured, open-source CMS built with Node.js that empowers organizations by combining in-context editing and headless architecture in a full-stack JS environment."
  },
  {
    title: "app-directory",
    description: "null"
  },
  {
    title: "app-ideas",
    description: "A Collection of application ideas which can be used to improve your coding skills."
  },
  {
    title: "app-playground",
    description: "https://app-dir.vercel.app/"
  },
  {
    title: "appflow",
    description: "Appflow -> Website Builder with AI (If you really want to make a scalable website then you should use a freelancer. But still, by AppFlow you can have a starter template. And if you are a client, then you can usethis to give an idea of how your website should be!!!)"
  },
  {
    title: "appflow-native",
    description: "Appflow Native ->Native Apps Builder with AI (If you really want to make a scalable app then you should use a freelancer. But still, by AppFlow Native you can have a starter template. And if you are a client, then you can use this to give an idea of how your app should be!!!)"
  },
  {
    title: "appwrite",
    description: "Build Fast. Scale Big. All in One Place. Cloud is now available in public beta. 🌩"
  },
  {
    title: "ar.js",
    description: "Image tracking, Location Based AR, Marker tracking. All on the Web."
  },
  {
    title: "arduino-ide",
    description: "Arduino IDE 2.x"
  },
  {
    title: "arduinocore-api",
    description: "Hardware independent layer of the Arduino cores defining the official API"
  },
  {
    title: "argparse",
    description: "CLI arguments parser for node.js. JS port of python's argparse module."
  },
  {
    title: "astro",
    description: "The all-in-one web framework designed for speed. ⭐️ Star to support our work!"
  },
  {
    title: "authelia",
    description: "The Single Sign-On Multi-Factor portal for web apps"
  },
  {
    title: "authpass",
    description: "AuthPass - Password Manager based on Flutter for all platforms. Keepass 2.x (kdbx 3.x) compatible."
  },
  {
    title: "automa",
    description: "A browser extension for automating your browser by connecting blocks"
  },
  {
    title: "awesome-arduino",
    description: "A curated list of awesome Arduino hardwares, libraries and softwares with update script"
  },
  {
    title: "awesome-chatgpt-prompts",
    description: "This repo includes ChatGPT prompt curation to use ChatGPT better."
  },
  {
    title: "awesome-cpp",
    description: "A curated list of awesome C++ (or C) frameworks, libraries, resources, and shiny things. Inspired by awesome-... stuff."
  },
  {
    title: "awesome-dataScience",
    description: "Python Data Science Handbook: full text in Jupyter Notebooks"
  },
  {
    title: "awesome-docker",
    description: ":whale: A curated list of Docker resources and projects"
  },
  {
    title: "awesome-github-user",
    description: "😎 Awesome lists about all kinds of interesting topics"
  },
  {
    title: "awesome-hacking",
    description: "A collection of various awesome lists for hackers, pentesters and security researchers"
  },
  {
    title: "awesome-machine-learning",
    description: "A curated list of awesome Machine Learning frameworks, libraries and software."
  },
  {
    title: "awesome-php",
    description: "A curated list of amazingly awesome PHP libraries, resources and shiny things."
  },
  {
    title: "awesome-python",
    description: "A curated list of awesome Python frameworks, libraries, software and resources"
  },
  {
    title: "awesome-react",
    description: "A collection of awesome things regarding React ecosystem"
  },
  {
    title: "awesome-react-native",
    description: "Awesome React Native components, news, tools, and learning material!"
  },
  {
    title: "awesome-selfhosted",
    description: "A list of Free Software network services and web applications which can be hosted on your own servers"
  },
  {
    title: "baserow",
    description: "Baserow is an open source no-code database tool and Airtable alternative. This is a mirrored repository, the official one is hosted on https://gitlab.com/bramw/baserow."
  },
  {
    title: "bash",
    description: "How to deploy vscode in the browser"
  },
  {
    title: "BeingOfExistence",
    description: "Just a boy!!!"
  },
  {
    title: "berty",
    description: "Berty is a secure peer-to-peer messaging app that works with or without internet access, cellular data or trust in the network"
  },
  {
    title: "best-websites-a-programmer-should-visit",
    description: ":link: Some useful websites for programmers."
  },
  {
    title: "bitcoin",
    description: "Bitcoin Core integration/staging tree"
  },
  {
    title: "blackhole",
    description: "A Music Player App made with Flutter"
  },
  {
    title: "blender",
    description: "Official mirror of Blender"
  },
  {
    title: "blink",
    description: "tiniest x86-64-linux emulator"
  },
  {
    title: "bookstack",
    description: "A platform to create documentation/wiki content built with PHP & Laravel"
  },
  {
    title: "brave-browser",
    description: "Next generation Brave browser for Android, Linux, macOS, Windows."
  },
  {
    title: "brave-core",
    description: "Core engine for the Brave browser for Android, Linux, macOS, Windows. For issues https://github.com/brave/brave-browser/issues"
  },
  {
    title: "browser-fox",
    description: ":cyclone: BrowserBox is Web application virtualization via zero trust remote browser isolation and secure document gateway technology. Embed secure unrestricted webviews on any device in a regular webpage. Multiplayer embeddable browsers, open source!"
  },
  {
    title: "build-your-own-x",
    description: "Master programming by recreating your favorite technologies from scratch."
  },
  {
    title: "bun",
    description: "Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one"
  },
  {
    title: "caddy",
    description: "Fast and extensible multi-platform HTTP/1-2-3 web server with automatic HTTPS"
  },
  {
    title: "cal.com",
    description: "Scheduling infrastructure for absolutely everyone."
  },
  {
    title: "caprover",
    description: "Scalable PaaS (automated Docker+nginx) - aka Heroku on Steroids"
  },
  {
    title: "casa-os",
    description: "CasaOS - A simple, easy-to-use, elegant open-source Personal Cloud system."
  },
  {
    title: "ceph",
    description: "Ceph is a distributed object, block, and file storage platform "
  },
  {
    title: "chainlist",
    description: "Hi"
  },
  {
    title: "chains",
    description: "provides metadata for chains"
  },
  {
    title: "chakra-ui",
    description: "⚡️ Simple, Modular & Accessible UI Components for your React Applications"
  },
  {
    title: "chalk",
    description: "🖍 Terminal string styling done right"
  },
  {
    title: "chalk-animation",
    description: ":clapper: Colorful animations in terminal output"
  },
  {
    title: "changemycursor",
    description: "chrome extension to change your cursor"
  },
  {
    title: "chartjs",
    description: "Simple HTML5 Charts using the <canvas> tag"
  },
  {
    title: "chatbot-ui",
    description: "null"
  },
  {
    title: "ChatGPT-Desktop",
    description: "🔮 ChatGPT Desktop Application (Mac, Windows and Linux)"
  },
  {
    title: "chatgpt4-nextjs",
    description: "A well-designed cross-platform ChatGPT UI (Web / PWA / Linux / Win / MacOS). 一键拥有你自己的跨平台 ChatGPT 应用。"
  },
  {
    title: "cheat.sh",
    description: "the only cheat sheet you need"
  },
  {
    title: "chia-blockchain",
    description: "Chia blockchain python implementation (full node, farmer, harvester, timelord, and wallet)"
  },
  {
    title: "chromium",
    description: "The official GitHub mirror of the Chromium source"
  },
  {
    title: "cinny",
    description: "Yet another matrix client"
  },
  {
    title: "clean-code-javascript",
    description: ":bathtub: Clean Code concepts adapted for JavaScript"
  },
  {
    title: "clean-code-typescript",
    description: "Clean Code concepts adapted for TypeScript"
  },
  {
    title: "cleave.js",
    description: "Format input text content when you are typing..."
  },
  {
    title: "cli",
    description: "GitHub’s official command line tool"
  },
  {
    title: "clients",
    description: "Bitwarden client applications (web, browser extension, desktop, and cli)"
  },
  {
    title: "cliui",
    description: "easily create complex multi-column command-line-interfaces."
  },
  {
    title: "clone-wars",
    description: "100+ open-source clones of popular sites like Airbnb, Amazon, Instagram, Netflix, Tiktok, Spotify, Whatsapp, Youtube etc. See source code, demo links, tech stack, github stars."
  },
  {
    title: "cloudquery",
    description: "The open source high performance data integration platform built for developers."
  },
  {
    title: "cockroach",
    description: "CockroachDB - the open source, cloud-native distributed SQL database."
  },
  {
    title: "code-server",
    description: "VS Code in the browser"
  },
  {
    title: "coder",
    description: "Provision remote development environments via Terraform"
  },
  {
    title: "coder-test",
    description: "just testing coder vscode workspace"
  },
  {
    title: "colossal-ai",
    description: "Making large AI models cheaper, faster and more accessible"
  },
  {
    title: "commander.js",
    description: "node.js command-line interfaces made easy"
  },
  {
    title: "community-skeleton",
    description: "UVdesk Opensource Community Helpdesk Project built for all to make a Full Ticketing Support System along with many more other features."
  },
  {
    title: "connect",
    description: "Will intregate youtube,facebook and.."
  },
  {
    title: "consul",
    description: "Consul is a distributed, highly available, and data center aware solution to connect and configure applications across dynamic, distributed infrastructure."
  },
  {
    title: "cosmos",
    description: "World's largest Contributor driven code dataset | Used in Quark Search Engine, @OpenGenus IQ, OpenGenus Visual Project"
  },
  {
    title: "cpp-learning",
    description: "Curated list of project-based tutorials"
  },
  {
    title: "cpp-notes",
    description: ":books: 技术面试必备基础知识、Leetcode、计算机操作系统、计算机网络、系统设计"
  },
  {
    title: "cpython",
    description: "The Python programming language"
  },
  {
    title: "css-protips",
    description: "⚡️ A collection of tips to help take your CSS skills pro 🦾"
  },
  {
    title: "curve",
    description: "Curve is a sandbox project hosted by the CNCF Foundation. It's cloud-native, high-performance, and easy to operate. Curve is an open-source distributed storage system for block and shared file storage."
  },
  {
    title: "daisyui",
    description: "⭐️ ⭐️ ⭐️ ⭐️ ⭐️  The most popular, free and open-source Tailwind CSS component library"
  },
  {
    title: "dall-e",
    description: "null"
  },
  {
    title: "darktable",
    description: "darktable is an open source photography workflow application and raw developer"
  },
  {
    title: "dashboard",
    description: "thirdweb.com and the thirdweb dashboard"
  },
  {
    title: "datasets",
    description: "🤗 The largest hub of ready-to-use datasets for ML models with fast, easy-to-use and efficient data manipulation tools"
  },
  {
    title: "dbeaver",
    description: "Free universal database tool and SQL client"
  },
  {
    title: "definitelytyped",
    description: "The repository for high quality TypeScript type definitions."
  },
  {
    title: "design-resources-for-developers",
    description: "Curated list of design and UI resources from stock photos, web templates, CSS frameworks, UI libraries, tools and much more"
  },
  {
    title: "detectron2",
    description: "Detectron2 is a platform for object detection, segmentation and other visual recognition tasks."
  },
  {
    title: "developer-roadmap",
    description: "Interactive roadmaps, guides and other educational content to help developers grow in their careers."
  },
  {
    title: "devhome",
    description: "Dev Home Experience"
  },
  {
    title: "devtools",
    description: "⚙️ Browser devtools extension for debugging Vue.js applications."
  },
  {
    title: "dgraph",
    description: "The high-performance database for modern applications"
  },
  {
    title: "diagrams",
    description: ":art: Diagram as Code for prototyping cloud system architectures"
  },
  {
    title: "directus",
    description: "The Modern Data Stack 🐰 — Directus is an instant REST+GraphQL API and intuitive no-code data collaboration app for any SQL database."
  },
  {
    title: "discord-open-source",
    description: "List of open source communities living on Discord"
  },
  {
    title: "django",
    description: "The Web framework for perfectionists with deadlines."
  },
  {
    title: "docker-compose",
    description: "Define and run multi-container applications with Docker"
  },
  {
    title: "docusaurus",
    description: "Easy to maintain open source documentation websites."
  },
  {
    title: "dokku",
    description: "A docker-powered PaaS that helps you build and manage the lifecycle of applications"
  },
  {
    title: "dom-examples",
    description: "Code examples that accompany various MDN DOM and Web API documentation pages"
  },
  {
    title: "dragonfly",
    description: "A modern replacement for Redis and Memcached"
  },
  {
    title: "drawio",
    description: "draw.io is a JavaScript, client-side editor for general diagramming and whiteboarding"
  },
  {
    title: "drizzle-orm",
    description: "TypeScript ORM that feels like writing SQL."
  },
  {
    title: "dub",
    description: "An open-source link shortener with built-in analytics + free custom domains."
  },
  {
    title: "dx",
    description: "An opensource product (but if you are rich then you can give me some money) made for Internet WWW stuffs. If you are a full stack developer than you should visit this atleast once in your life. Flawless (Developer Experince) For Web"
  },
  {
    title: "dx-native",
    description: "This is an opensource product (but if you are rich then you can give me some money) made for All Operating Systems stuffs. If you are a full stack developer than you should visit this atleast once in your life. Flawless (Developer Experince) For  Native Apps"
  },
  {
    title: "dx-workspace",
    description: "dx workspaces by coder"
  },
  {
    title: "dyrectorio",
    description: "dyrector.io is a self-hosted continuous delivery & deployment platform with version management."
  },
  {
    title: "elastic-search",
    description: "Free and Open, Distributed, RESTful Search Engine"
  },
  {
    title: "electron",
    description: ":electron: Build cross-platform desktop apps with JavaScript, HTML, and CSS"
  },
  {
    title: "element-web",
    description: "A glossy Matrix collaboration client for the web."
  },
  {
    title: "elysia",
    description: "Fast, and friendly Bun web framework"
  },
  {
    title: "emonswap",
    description: "The new gen of Blockchain"
  },
  {
    title: "eruda",
    description: "Console for mobile browsers"
  },
  {
    title: "etcher",
    description: "Flash OS images to SD cards & USB drives, safely and easily."
  },
  {
    title: "every-programmer-should-know",
    description: "A collection of (mostly) technical things every software developer should know about"
  },
  {
    title: "examples",
    description: "A set of examples around pytorch in Vision, Text, Reinforcement Learning, etc."
  },
  {
    title: "expo",
    description: "An open-source platform for making universal native apps with React. Expo runs on Android, iOS, and the web."
  },
  {
    title: "express",
    description: "Fast, unopinionated, minimalist web framework for node."
  },
  {
    title: "express-typescript",
    description: "null"
  },
  {
    title: "faas",
    description: "OpenFaaS - Serverless Functions Made Simple"
  },
  {
    title: "face-recognition",
    description: "The world's simplest facial recognition api for Python and the command line"
  },
  {
    title: "fastText",
    description: "Library for fast text representation and classification."
  },
  {
    title: "FaucETH",
    description: "Faucet for EVM chains"
  },
  {
    title: "ffmpeg",
    description: "Mirror of https://git.ffmpeg.org/ffmpeg.git"
  },
  {
    title: "fig-autocomplete",
    description: "IDE-style autocomplete for your existing terminal & shell"
  },
  {
    title: "figma-primitives",
    description: "Radix Primitives is an open-source UI component library for building high-quality, accessible design systems and web apps. Maintained by @workos."
  },
  {
    title: "filebrowser",
    description: "📂 Web File Browser"
  },
  {
    title: "Files",
    description: "Building the best file manager experience for Windows"
  },
  {
    title: "flagsmith",
    description: "Open Source Feature Flagging and Remote Config Service. Host on-prem or use our hosted version at https://flagsmith.com/"
  },
  {
    title: "flowbite",
    description: "The most popular and open-source library of Tailwind CSS components"
  },
  {
    title: "font-awesome",
    description: "The iconic SVG, font, and CSS toolkit"
  },
  {
    title: "fonts",
    description: "Font files available from Google Fonts, and a public issue tracker for all things Google Fonts"
  },
  {
    title: "formatjs",
    description: "The monorepo home to all of the FormatJS related libraries, most notably react-intl."
  },
  {
    title: "formik",
    description: "Build forms in React, without the tears 😭 "
  },
  {
    title: "free-for-dev",
    description: "A list of SaaS, PaaS and IaaS offerings that have free tiers of interest to devops and infradev"
  },
  {
    title: "friday",
    description: "Firday: Your Personal AI Friend. It is an advanced AI assistant designed to work seamlessly across various platforms, including websites and apps. Its capabilities extend beyond those of traditional AI assistantslike Alexa, Google Assistant, and Siri."
  },
  {
    title: "friday3",
    description: "Never Gonna Give You Up"
  },
  {
    title: "friendica",
    description: "Friendica Communications Platform"
  },
  {
    title: "front-end-checklist",
    description: "🗂 The perfect Front-End Checklist for modern websites and meticulous developer s"
  },
  {
    title: "fzf",
    description: ":cherry_blossom: A command-line fuzzy finder"
  },
  {
    title: "gatus",
    description: "⛑ Automated developer-oriented status page"
  },
  {
    title: "gestalt",
    description: "A set of React UI components that supports Pinterest’s design language"
  },
  {
    title: "ghidra",
    description: "Ghidra is a software reverse engineering (SRE) framework"
  },
  {
    title: "ghost",
    description: "Turn your audience into a business. Publishing, memberships, subscriptions and newsletters."
  },
  {
    title: "gimp",
    description: "Read-only mirror of https://gitlab.gnome.org/GNOME/gimp"
  },
  {
    title: "github-vscode-theme",
    description: "GitHub's VS Code themes"
  },
  {
    title: "gitlabhq",
    description: "GitLab CE Mirror | Please open new issues in our issue tracker on GitLab.com"
  },
  {
    title: "gitpod",
    description: "The developer platform for on-demand cloud development environments to create software faster and more securely."
  },
  {
    title: "gitpod-docker-compose",
    description: "A Docker Compose template, configured for Gitpod (www.gitpod.io) to give you pre-built, ephemeral development environments in the cloud."
  },
  {
    title: "gitstar-ranking",
    description: "GitHub star ranking for users, organizations and repositories"
  },
  {
    title: "givenus0026",
    description: "🚀givenus0026 -> This repository is dedicated to an NFT Blockchain project. It’s a one-stop solution for creating, buying, and selling NFTs in a secure environment. With robust architecture, efficient smart contracts, and an intuitive interface, this project is set to exceed expectations. Let’s bring your vision to life! 🌟"
  },
  {
    title: "go",
    description: "The Go programming language"
  },
  {
    title: "godot",
    description: "Godot Engine – Multi-platform 2D and 3D game engine"
  },
  {
    title: "google-keep-clone",
    description: "Clone of Google Keep built using Django and Javascript"
  },
  {
    title: "Google-Keep-using-React-Native",
    description: "Google Keep with React Native"
  },
  {
    title: "googlesearch-termux",
    description: "Google Search python program.You can search any website in terminal."
  },
  {
    title: "gpt-nextjs-example",
    description: "null"
  },
  {
    title: "gradio",
    description: "Build and share delightful machine learning apps, all in Python. 🌟 Star to support our work!"
  },
  {
    title: "grafana",
    description: "The open and composable observability and data visualization platform. Visualize metrics, logs, and traces from multiple sources like Prometheus, Loki, Elasticsearch, InfluxDB, Postgres and many more. "
  },
  {
    title: "graphite",
    description: "2D raster & vector editor that melds traditional layers & tools with a modern node-based, fully non-destructive procedural workflow."
  },
  {
    title: "graphql-spec",
    description: "GraphQL is a query language and execution engine tied to any backend service."
  },
  {
    title: "hacker-scripts",
    description: "Based on a true story"
  },
  {
    title: "hackIn",
    description: "Login and Logout"
  },
  {
    title: "hammer.js",
    description: "A javascript library for multi-touch gestures :// You can touch this"
  },
  {
    title: "has-flag",
    description: "Check if argv has a specific flag"
  },
  {
    title: "head",
    description: "A simple guide to HTML <head> elements"
  },
  {
    title: "headlessui",
    description: "Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS."
  },
  {
    title: "hedgedoc",
    description: "HedgeDoc - Ideas grow better together"
  },
  {
    title: "hello",
    description: "Multiversal Social Media!!!"
  },
  {
    title: "hello-github",
    description: ":octocat: 分享 GitHub 上有趣、入门级的开源项目。Share interesting, entry-level open source projects on GitHub."
  },
  {
    title: "hello-tazmi",
    description: "This will be the Main Hello Platform and this project will be done before 31/05/2023(Wednesday)"
  },
  {
    title: "home-assistant",
    description: ":house_with_garden: Open source home automation that puts local control and privacy first."
  },
  {
    title: "homebridge",
    description: "HomeKit support for the impatient."
  },
  {
    title: "hoppscotch",
    description: "👽 Open source API development ecosystem - https://hoppscotch.io"
  },
  {
    title: "hover",
    description: "A collection of CSS3 powered hover effects to be applied to links, buttons, logos, SVG, featured images and so on. Easily apply to your own elements, modify or just use for inspiration. Available in CSS, Sass, and LESS."
  },
  {
    title: "html5-boilerplate",
    description: "A professional front-end template for building fast, robust, and adaptable web apps or sites."
  },
  {
    title: "htmx",
    description: "</> htmx - high power tools for HTML"
  },
  {
    title: "hyperdx",
    description: "Resolve production issues, fast. An open source observability platform unifying session replays, logs, metrics, traces and errors."
  },
  {
    title: "hyperscript",
    description: "a small scripting language for the web"
  },
  {
    title: "hyperui",
    description: "Free Tailwind CSS components for application UI, ecommerce and marketing with support for dark mode, RTL and Alpine JS 🚀"
  },
  {
    title: "icu",
    description: "Repo for counting stars and contributing. Press F to pay respect to glorious developers."
  },
  {
    title: "ImHex",
    description: "🔍 A Hex Editor for Reverse Engineers, Programmers and people who value their retinas when working at 3 AM."
  },
  {
    title: "influxdb",
    description: "Scalable datastore for metrics, events, and real-time analytics"
  },
  {
    title: "inpainter-stable-diffusion",
    description: "null"
  },
  {
    title: "Inquirer.js",
    description: "A collection of common interactive command line user interfaces."
  },
  {
    title: "insomnia",
    description: "The open-source, cross-platform API client for GraphQL, REST, WebSockets and gRPC."
  },
  {
    title: "intellij-community",
    description: "IntelliJ IDEA Community Edition & IntelliJ Platform"
  },
  {
    title: "ios-mirror",
    description: "Unofficial mirror of ios"
  },
  {
    title: "ipfs",
    description: "Peer-to-peer hypermedia protocol"
  },
  {
    title: "jarvis",
    description: "JARVIS, a system to connect LLMs with ML community. Paper: https://arxiv.org/pdf/2303.17580.pdf"
  },
  {
    title: "jellyfin",
    description: "The Free Software Media System"
  },
  {
    title: "jina",
    description: "☁️ Build multimodal AI applications with cloud-native stack"
  },
  {
    title: "jitsi-meet",
    description: "Jitsi Meet - Secure, Simple and Scalable Video Conferences that you use as a standalone app or embed in your web application."
  },
  {
    title: "joi",
    description: "The most powerful data validation library for JS"
  },
  {
    title: "joplin",
    description: "Joplin - the secure note taking and to-do app with synchronisation capabilities for Windows, macOS, Linux, Android and iOS."
  },
  {
    title: "json-server",
    description: "Get a full fake REST API with zero coding in less than 30 seconds (seriously)"
  },
  {
    title: "karate",
    description: "Test Automation Made Simple"
  },
  {
    title: "keep",
    description: "Desktop app for Google Keep packaged with Electron"
  },
  {
    title: "kiota",
    description: "OpenAPI based HTTP Client code generator"
  },
  {
    title: "kiota-cli-commons",
    description: "Common set of commands for CLI client generation"
  },
  {
    title: "krita",
    description: "Krita is a free and open source cross-platform application that offers an end-to-end solution for creating digital art files from scratch built on the KDE and Qt frameworks."
  },
  {
    title: "kubernetes",
    description: "Production-Grade Container Scheduling and Management"
  },
  {
    title: "kuzzle",
    description: "Open-source Back-end, self-hostable & ready to use - Real-time, storage, advanced search - Web, Apps, Mobile, IoT -"
  },
  {
    title: "langchain",
    description: "⚡ Building applications with LLMs through composability ⚡"
  },
  {
    title: "laravel",
    description: "null"
  },
  {
    title: "lazygit",
    description: "simple terminal UI for git commands"
  },
  {
    title: "leaflet",
    description: "🍃 JavaScript library for mobile-friendly interactive maps 🇺🇦"
  },
  {
    title: "learn-regex",
    description: "Learn regex the easy way"
  },
  {
    title: "learnopencv",
    description: "Learn OpenCV  : C++ and Python Examples"
  },
  {
    title: "lemmy",
    description: "🐀 A link aggregator and forum for the fediverse"
  },
  {
    title: "leptos",
    description: "Build fast web applications with Rust."
  },
  {
    title: "lexical",
    description: "Lexical is an extensible text editor framework that provides excellent reliability, accessibility and performance."
  },
  {
    title: "libre-pcb",
    description: "A powerful, innovative and intuitive EDA suite for everyone!"
  },
  {
    title: "libsql",
    description: "libSQL is a fork of SQLite that is both Open Source, and Open Contributions."
  },
  {
    title: "linux",
    description: "Linux kernel source tree"
  },
  {
    title: "llama",
    description: "Inference code for LLaMA models"
  },
  {
    title: "localstack",
    description: "💻 A fully functional local AWS cloud stack. Develop and test your cloud & Serverless apps offline"
  },
  {
    title: "log-symbols",
    description: "Colored symbols for various log levels"
  },
  {
    title: "login-widget",
    description: "LI.FI Widget for cross-chain bridging and swapping. It will drive your multi-chain strategy and attract new users from everywhere."
  },
  {
    title: "logseq",
    description: "A privacy-first, open-source platform for knowledge management and collaboration. Download link:  http://github.com/logseq/logseq/releases. roadmap: http://trello.com/b/8txSM12G/roadmap"
  },
  {
    title: "lokinet",
    description: "Lokinet is an anonymous, decentralized and IP based overlay network for the internet."
  },
  {
    title: "lossless-cut",
    description: "The swiss army knife of lossless video/audio editing"
  },
  {
    title: "lottie-web",
    description: "Render After Effects animations natively on Web, Android and iOS, and React Native. http://airbnb.io/lottie/"
  },
  {
    title: "m8n",
    description: "Free and source-available fair-code licensed workflow automation tool. Easily automate tasks across different services."
  },
  {
    title: "macos-modern-vscode-theme",
    description: "MacOS Modern is a theme pack styled to match native MacOS as closely as possible. Use recommended settings in the README.md for best results."
  },
  {
    title: "ManFromEarth",
    description: "Today I will make all things I ever wanted to make. Chances comes very less but I can use them all Sumon!!!"
  },
  {
    title: "manifesto-terraform",
    description: "The OpenTF Manifesto expresses concern over HashiCorp's switch of the Terraform license from open-source to the Business Source License (BSL) and calls for the tool's return to a truly open-source license."
  },
  {
    title: "manim",
    description: "Animation engine for explanatory math videos"
  },
  {
    title: "mantine",
    description: "A fully featured React components library"
  },
  {
    title: "mastodon",
    description: "Your self-hosted, globally interconnected microblogging community"
  },
  {
    title: "material-design-icons",
    description: "Material Design icons by Google"
  },
  {
    title: "matter-js",
    description: "a 2D rigid body physics engine for the web ▲● ■"
  },
  {
    title: "mediapipe",
    description: "Cross-platform, customizable ML solutions for live and streaming media."
  },
  {
    title: "medusa",
    description: "Building blocks for digital commerce"
  },
  {
    title: "mega",
    description: "The mega.nz web client"
  },
  {
    title: "memgraph",
    description: "Open-source graph database, built for real-time streaming data, compatible with Neo4j."
  },
  {
    title: "meow",
    description: "🐈 CLI app helper"
  },
  {
    title: "metabase",
    description: "The simplest, fastest way to get business intelligence and analytics to everyone in your company :yum:"
  },
  {
    title: "metadata-playground",
    description: "Playground for Solidity metadata hash and CBOR encoded data appended to the contract bytecode."
  },
  {
    title: "minio",
    description: "High Performance Object Storage for AI"
  },
  {
    title: "mirotalk",
    description: "🚀 WebRTC - P2P - Simple, Secure, Fast Real-Time Video Conferences Up to 4k and 60fps, compatible with all browsers and platforms."
  },
  {
    title: "misskey",
    description: "🌎 An interplanetary microblogging platform 🚀"
  },
  {
    title: "ml-code",
    description: "100 Days of ML Coding"
  },
  {
    title: "moby",
    description: "Moby Project - a collaborative project for the container ecosystem to assemble container-based systems"
  },
  {
    title: "mockingbird",
    description: "🚀AI拟声: 5秒内克隆您的声音并生成任意语音内容 Clone a voice in 5 seconds to generate arbitrary speech in real-time"
  },
  {
    title: "moment",
    description: "Parse, validate, manipulate, and display dates in javascript."
  },
  {
    title: "monaco-editor",
    description: "A browser based code editor"
  },
  {
    title: "mongodb-starter",
    description: "null"
  },
  {
    title: "mongodb-starter-demo",
    description: "null"
  },
  {
    title: "moralis",
    description: "This is Moralis!!!"
  },
  {
    title: "motion",
    description: "Open source, production-ready animation and gesture library for React"
  },
  {
    title: "motion-canvas",
    description: "Visualize Complex Ideas Programmatically"
  },
  {
    title: "motrix",
    description: "A full-featured download manager."
  },
  {
    title: "mpv",
    description: "🎥 Command line video player"
  },
  {
    title: "multiverse",
    description: "Multivers: Your Virtual Universe  Explore, interact, and create in 2D and 3D virtual spaces with Multivers. Dive into animated worlds, meet iconic characters, and experience the internet like never before. Welcome to your virtual adventure!"
  },
  {
    title: "my-website",
    description: "First iteration of my personal website build with Next.js"
  },
  {
    title: "neovim",
    description: "Vim-fork focused on extensibility and usability"
  },
  {
    title: "netbird",
    description: "Connect your devices into a single secure private WireGuard®-based mesh network with SSO/MFA and simple access controls."
  },
  {
    title: "netdata",
    description: "Monitor your servers, containers, and applications, in high-resolution and in real-time!"
  },
  {
    title: "netlify-alchemy-dapp-boilerplates",
    description: "null"
  },
  {
    title: "netlify-express",
    description: "null"
  },
  {
    title: "next-auth",
    description: "Authentication for the Web."
  },
  {
    title: "next-auth-example",
    description: "Example showing how to use NextAuth.js with Next.js"
  },
  {
    title: "next.js",
    description: "The React Framework"
  },
  {
    title: "nextcloud-server",
    description: "☁️ Nextcloud server, a safe home for all your data"
  },
  {
    title: "nextjs-chat",
    description: "null"
  },
  {
    title: "nextjs-chat-demo",
    description: "null"
  },
  {
    title: "nextjs-libraries",
    description: "I will all the libraries I wanted to use ever in websites!!!"
  },
  {
    title: "nextjs-openai-doc-search-starter",
    description: "null"
  },
  {
    title: "nextjs-portfolio-pageview-counter",
    description: "null"
  },
  {
    title: "nextui",
    description: "🚀   Beautiful, fast and modern React UI library."
  },
  {
    title: "nodejs.org",
    description: "The Node.js® Website"
  },
  {
    title: "nodemon",
    description: "Monitor for any changes in your node.js application and automatically restart the server - perfect for development"
  },
  {
    title: "nomad",
    description: "Nomad is an easy-to-use, flexible, and performant workload orchestrator that can deploy a mix of microservice, batch, containerized, and non-containerized applications. Nomad is easy to operate and scale and has native Consul and Vault integrations."
  },
  {
    title: "normalize.css",
    description: "A modern alternative to CSS resets"
  },
  {
    title: "noter-android",
    description: "A google keep look alike."
  },
  {
    title: "notes-app",
    description: "Think fearlessly with end-to-end encrypted notes and files. For issues, visit https://standardnotes.com/forum or https://standardnotes.com/help."
  },
  {
    title: "notesnook",
    description: "A fully open source & end-to-end encrypted note taking alternative to Evernote."
  },
  {
    title: "nothing",
    description: "halfart"
  },
  {
    title: "nuclear",
    description: "Streaming music player that finds free music for you"
  },
  {
    title: "nuclei",
    description: "Fast and customizable vulnerability scanner based on simple YAML based DSL."
  },
  {
    title: "nuejs",
    description: "Build user interfaces with 10x less code. Alternative to React, Vue, and Svelte"
  },
  {
    title: "numpy",
    description: "The fundamental package for scientific computing with Python."
  },
  {
    title: "nuxt",
    description: "Nuxt is an intuitive and extendable way to create type-safe, performant and production-grade full-stack web apps and websites with Vue 3."
  },
  {
    title: "nvdia-tensorflow",
    description: "An Open Source Machine Learning Framework for Everyone "
  },
  {
    title: "nvidia-docker",
    description: "Build and run Docker containers leveraging NVIDIA GPUs"
  },
  {
    title: "nw.js",
    description: "Call all Node.js modules directly from DOM/WebWorker and enable a new way of writing applications with all Web technologies."
  },
  {
    title: "obs-studio",
    description: "OBS Studio - Free and open source software for live streaming and screen recording"
  },
  {
    title: "Obsidian",
    description: "All Obsidian notes will be stored or will bakeUped in this git repo!!!"
  },
  {
    title: "ohmyzsh",
    description: "🙃   A delightful community-driven (with 2,100+ contributors) framework for managing your zsh configuration. Includes 300+ optional plugins (rails, git, macOS, hub, docker, homebrew, node, php, python, etc), 140+themes to spice up your morning, and an auto-update tool so that makes it easy to keep up with the latest updates from the community."
  },
  {
    title: "olive",
    description: "Free open-source non-linear video editor"
  },
  {
    title: "omnivore",
    description: "Omnivore is a complete, open source read-it-later solution for people who like reading."
  },
  {
    title: "open-bb-terminal",
    description: "Investment Research for Everyone, Everywhere."
  },
  {
    title: "open-gpu-kernel-modules",
    description: "NVIDIA Linux open GPU kernel module source"
  },
  {
    title: "open-scan",
    description: "A privacy-friendly Document Scanner app"
  },
  {
    title: "openai-node",
    description: "The official Node.js / Typescript library for the OpenAI API"
  },
  {
    title: "opencv",
    description: "Open Source Computer Vision Library"
  },
  {
    title: "openshot-qt",
    description: "OpenShot Video Editor is an award-winning free and open-source video editor for Linux, Mac, and Windows, and is dedicated to delivering high quality video editing and animation solutions to the world."
  },
  {
    title: "opentofu",
    description: "OpenTofu lets you declaratively manage your cloud infrastructure."
  },
  {
    title: "openvscode-releases",
    description: "This repo is only to produce releases for OpenVSCode Server."
  },
  {
    title: "OptiVideoEditor-for-android",
    description: "Native Video editor : Video trim, Audio, Video merge, Slow and fast motion, Text and image, etc..."
  },
  {
    title: "ora",
    description: "Elegant terminal spinner"
  },
  {
    title: "organicmaps",
    description: "🍃 Organic Maps is a free Android & iOS offline maps app for travelers, tourists, hikers, and cyclists. It uses crowd-sourced OpenStreetMap data and is developed with love by MapsWithMe (MapsMe) founders and our community. No ads, no tracking, no data collection, no crapware. Please donate to support the development!"
  },
  {
    title: "otterscan",
    description: "A blazingly fast, local, Ethereum block explorer built on top of Erigon"
  },
  {
    title: "packer",
    description: "Packer is a tool for creating identical machine images for multiple platforms from a single source configuration."
  },
  {
    title: "paint-by-text",
    description: "null"
  },
  {
    title: "palm-rlhf-pytorch",
    description: "Implementation of RLHF (Reinforcement Learning with Human Feedback) on top of the PaLM architecture. Basically ChatGPT but with PaLM"
  },
  {
    title: "pandas",
    description: "Flexible and powerful data analysis / manipulation library for Python, providing labeled data structures similar to R data.frame objects, statistical functions, and much more"
  },
  {
    title: "papers-we-love",
    description: "Papers from the computer science community to read and discuss."
  },
  {
    title: "particles.js",
    description: "A lightweight JavaScript library for creating particles"
  },
  {
    title: "passport",
    description: "Simple, unobtrusive authentication for Node.js."
  },
  {
    title: "path-gradient",
    description: "hello how are khana khake jana!!!"
  },
  {
    title: "payloads-all-the-things",
    description: "A list of useful payloads and bypass for Web Application Security and Pentest/CTF"
  },
  {
    title: "pcloud.github.com",
    description: "pCloud's Developers Website"
  },
  {
    title: "pdf.js",
    description: "PDF Reader in JavaScript"
  },
  {
    title: "peertube",
    description: "ActivityPub-federated video streaming platform using P2P directly in your web browser"
  },
  {
    title: "penpot",
    description: "Penpot - The Open-Source design & prototyping platform"
  },
  {
    title: "photo-editor",
    description: "A Photo Editor library with simple, easy support for image editing using paints,text,filters,emoji and Sticker like stories."
  },
  {
    title: "photoprism",
    description: "AI-Powered Photos App for the Decentralized Web 🌈💎✨"
  },
  {
    title: "php-laravel",
    description: "Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation for your next big idea — freeing you to create without sweating the small things."
  },
  {
    title: "plasmic",
    description: "Visual page builder and web design tool for any website or web app tech stack"
  },
  {
    title: "playwright",
    description: "Playwright is a framework for Web Testing and Automation. It allows testing Chromium, Firefox and WebKit with a single API. "
  },
  {
    title: "plop",
    description: "Consistency Made Simple"
  },
  {
    title: "pm2",
    description: "Node.js Production Process Manager with a built-in Load Balancer."
  },
  {
    title: "pnpm",
    description: "Fast, disk space efficient package manager"
  },
  {
    title: "podman",
    description: "Podman: A tool for managing OCI containers and pods."
  },
  {
    title: "postcss",
    description: "Transforming styles with JS plugins"
  },
  {
    title: "powerlevel10k",
    description: "A Zsh theme"
  },
  {
    title: "pptist",
    description: "基于 Vue3.x + TypeScript 的在线演示文稿（幻灯片）应用，还原了大部分 Office PowerPoint 常用功能，实现在线PPT的编辑、演示。支持导出PPT文件。"
  },
  {
    title: "preline",
    description: "Preline UI is an open-source set of prebuilt UI components based on the utility-first Tailwind CSS framework."
  },
  {
    title: "prettier",
    description: "Prettier is an opinionated code formatter."
  },
  {
    title: "prisma",
    description: "Next-generation ORM for Node.js & TypeScript | PostgreSQL, MySQL, MariaDB, SQL Server, SQLite, MongoDB and CockroachDB"
  },
  {
    title: "project_3D_developer_portfolio",
    description: "null"
  },
  {
    title: "project_ai_mern_image_generation",
    description: "Build and Deploy a Full Stack MERN AI Image Generation App MidJourney & DALL E Clone"
  },
  {
    title: "prometheus",
    description: "The Prometheus monitoring system and time series database."
  },
  {
    title: "promptflow",
    description: "Build high-quality LLM apps - from prototyping, testing to production deployment and monitoring."
  },
  {
    title: "prompts",
    description: "❯ Lightweight, beautiful and user-friendly interactive prompts"
  },
  {
    title: "public-apis",
    description: "A collective list of free APIs"
  },
  {
    title: "puppeteer",
    description: "Node.js API for Chrome "
  },
  {
    title: "pygwalker",
    description: "PyGWalker: Turn your pandas dataframe into an interactive UI for visual analysis"
  },
  {
    title: "python-patterns",
    description: "A collection of design patterns/idioms in Python"
  },
  {
    title: "qwen",
    description: "The official repo of Qwen (通义千问) chat & pretrained large language model proposed by Alibaba Cloud."
  },
  {
    title: "rath",
    description: "Next generation of automated data exploratory analysis and visualization platform."
  },
  {
    title: "rclone",
    description: "rsync for cloud storage - Google Drive, S3, Dropbox, Backblaze B2, One Drive, Swift, Hubic, Wasabi, Google Cloud Storage, Yandex Files"
  },
  {
    title: "react",
    description: "A declarative, efficient, and flexible JavaScript library for building user interfaces."
  },
  {
    title: "react-beautiful-dnd",
    description: "Beautiful and accessible drag and drop for lists with React"
  },
  {
    title: "react-dnd",
    description: "Drag and Drop for React"
  },
  {
    title: "react-email",
    description: "💌 Build and send emails using React"
  },
  {
    title: "react-iconly",
    description: "🌈    React component for Iconly icons"
  },
  {
    title: "react-motion",
    description: "A spring that solves your animation problems."
  },
  {
    title: "react-native",
    description: "A framework for building native applications using React"
  },
  {
    title: "react-native-photo-editor",
    description: "🌄 Photo editor using native modules for iOS and Android. Inherit from 2 available libraries, ZLImageEditor (iOS) and PhotoEditor (Android)"
  },
  {
    title: "react-native-video-processing",
    description: "Native Video editing/trimming/compressing  :movie_camera: library for React-Native"
  },
  {
    title: "react-phone-input-2",
    description: ":telephone_receiver: Highly customizable phone input component with auto formatting"
  },
  {
    title: "react-redux",
    description: "Official React bindings for Redux"
  },
  {
    title: "react-three-fiber",
    description: "🇨🇭 A React renderer for Three.js"
  },
  {
    title: "react-use",
    description: "React Hooks — 👍"
  },
  {
    title: "react-virtualized",
    description: "React components for efficiently rendering large lists and tabular data"
  },
  {
    title: "real-time-voice-cloning",
    description: "Clone a voice in 5 seconds to generate arbitrary speech in real-time"
  },
  {
    title: "realworld",
    description: "The mother of all demo apps — Exemplary fullstack Medium.com clone powered by React, Angular, Node, Django, and many more"
  },
  {
    title: "redux-form",
    description: "A Higher Order Component using react-redux to keep form state in a Redux store"
  },
  {
    title: "rimraf",
    description: "A `rm -rf` util for nodejs"
  },
  {
    title: "rippleui",
    description: "Clean, modern and beautiful Tailwind CSS components."
  },
  {
    title: "rocket.chat",
    description: "The communications platform that puts data protection first."
  },
  {
    title: "rrweb",
    description: "record and replay the web"
  },
  {
    title: "rust",
    description: "Empowering everyone to build reliable and efficient software."
  },
  {
    title: "rustdesk",
    description: "An open-source remote desktop, and alternative to TeamViewer."
  },
  {
    title: "samba",
    description: "https://gitlab.com/samba-team/samba is the Official GitLab mirror of https://git.samba.org/samba.git   --   Merge requests should be made on GitLab (not on GitHub)"
  },
  {
    title: "sandstorm",
    description: "Sandstorm is a self-hostable web productivity suite. It's implemented as a security-hardened web app package manager."
  },
  {
    title: "sass",
    description: "Sass makes CSS fun!"
  },
  {
    title: "scrapy",
    description: "Scrapy, a fast high-level web crawling & scraping framework for Python."
  },
  {
    title: "scrcpy",
    description: "Display and control your Android device"
  },
  {
    title: "scribble-diffusion",
    description: "null"
  },
  {
    title: "scribble-diffusion-demo",
    description: "null"
  },
  {
    title: "sdk-generator",
    description: "Generating SDKs for multiple programming languages and platforms ⚙️"
  },
  {
    title: "seafile",
    description: "High performance file syncing and sharing, with also Markdown WYSIWYG editing, Wiki, file label and other knowledge management features."
  },
  {
    title: "sentry",
    description: "Developer-first error tracking and performance monitoring"
  },
  {
    title: "server",
    description: "The core infrastructure backend (API, database, Docker, etc)."
  },
  {
    title: "sharex",
    description: "ShareX is a free and open source program that lets you capture or record any area of your screen and share it with a single press of a key. It also allows uploading images, text or other types of files to many supported destinations you can choose from."
  },
  {
    title: "signal-android-app",
    description: "A private messenger for Android."
  },
  {
    title: "sira",
    description: "🕹 Customizable and 😍 accessible design system which provides TailwindCSS comp onent class title library to build modern UI. 💥"
  },
  {
    title: "skateshop",
    description: "An open source e-commerce skateshop build with everything new in Next.js 13."
  },
  {
    title: "snapdrop",
    description: "A Progressive Web App for local file sharing "
  },
  {
    title: "socket.io",
    description: "Realtime application framework (Node.JS server)"
  },
  {
    title: "sogo",
    description: "SOGo is a very fast and scalable modern collaboration suite (groupware). It offers calendaring, address book management, and a full-featured Webmail client along with resource sharing and permission handling. It also makes use of documented standards (IMAP, CalDAV, CardDAV, etc.) and thereby provides native connectivity (without plugins) to many cl"
  },
  {
    title: "solana",
    description: "Web-Scale Blockchain for fast, secure, scalable, decentralized apps and marketplaces."
  },
  {
    title: "solidity",
    description: "Solidity, the Smart Contract Programming Language"
  },
  {
    title: "spark",
    description: "Apache Spark - A unified analytics engine for large-scale data processing"
  },
  {
    title: "splash-screen",
    description: "Just a simple splash screen to work with!!!"
  },
  {
    title: "spleeter",
    description: "Deezer source separation library including pretrained models."
  },
  {
    title: "src",
    description: "Source-code used in Kiwi Browser for Android"
  },
  {
    title: "stable-diffusion",
    description: "A latent text-to-image diffusion model"
  },
  {
    title: "stable-diffusion-webui",
    description: "Stable Diffusion web UI"
  },
  {
    title: "stablediffusion",
    description: "High-Resolution Image Synthesis with Latent Diffusion Models"
  },
  {
    title: "storage",
    description: "Google Drive clone completely anonymous"
  },
  {
    title: "strapi",
    description: "🚀 Strapi is the leading open-source headless CMS. It’s 100% JavaScript, fully customizable and developer-first."
  },
  {
    title: "string-width",
    description: "Get the visual width of a string - the number of columns required to display it"
  },
  {
    title: "styled-components",
    description: "Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress 💅"
  },
  {
    title: "styled-icons",
    description: "💅 Popular icon packs like Font Awesome, Material Design, and Octicons, available as React Styled Components"
  },
  {
    title: "supabase",
    description: "The open source Firebase alternative. Follow to stay updated about our public Beta."
  },
  {
    title: "superplate",
    description: " A well-structured production-ready frontend boilerplate with Typescript, React Testing Library, styled-component, React Query, .env, Axios, Bundle Analyzer, Prettier and 30+ plugins. superplate creates projects for React.js, Next.js, and refine. https://pankod.github.io/superplate/"
  },
  {
    title: "superset",
    description: "Apache Superset is a Data Visualization and Data Exploration Platform"
  },
  {
    title: "swiper",
    description: "Most modern mobile touch slider with hardware accelerated transitions"
  },
  {
    title: "swr",
    description: "React Hooks for Data Fetching"
  },
  {
    title: "syncthing",
    description: "Open Source Continuous File Synchronization"
  },
  {
    title: "system-design-primer",
    description: "Learn how to design large-scale systems. Prep for the system design interview.  Includes Anki flashcards."
  },
  {
    title: "tabby",
    description: "A terminal for a more modern age"
  },
  {
    title: "tailgrids",
    description: "Free Tailwind CSS UI Components - Crafted for modern websites, landing pages and web apps. TailGrids Core is free and open-source so, feel free to use with your personal or commercial projects. If you would like to show your support and love, don't forget to give us a star 🌟"
  },
  {
    title: "tailwindcss-documentation",
    description: "The Tailwind CSS documentation website."
  },
  {
    title: "tailwindcss-intellisense",
    description: "Intelligent Tailwind CSS tooling for Visual Studio Code"
  },
  {
    title: "tauri",
    description: "Build smaller, faster, and more secure desktop applications with a web frontend."
  },
  {
    title: "taxonomy",
    description: "An open source application built using the new router, server components and everything new in Next.js 13."
  },
  {
    title: "tdesktop",
    description: "Telegram Desktop messaging app"
  },
  {
    title: "template-typescript-node",
    description: "null"
  },
  {
    title: "tensorflow",
    description: "An Open Source Machine Learning Framework for Everyone"
  },
  {
    title: "tensorflow-models",
    description: "Models and examples built with TensorFlow"
  },
  {
    title: "terminal-command",
    description: "Magnificent app which corrects your previous console command."
  },
  {
    title: "termux-app",
    description: "Termux - a terminal emulator application for Android OS extendible by variety of packages."
  },
  {
    title: "terraform",
    description: "Terraform enables you to safely and predictably create, change, and improve infrastructure. It is a source-available tool that codifies APIs into declarative configuration files that can be shared amongst team members, treated as code, edited, reviewed, and versioned."
  },
  {
    title: "tesseract",
    description: "Tesseract Open Source OCR Engine (main repository)"
  },
  {
    title: "the-art-of-command-line",
    description: "Master the command line, in one page"
  },
  {
    title: "theia",
    description: "Eclipse Theia is a cloud & desktop IDE framework implemented in TypeScript."
  },
  {
    title: "theia-vscode",
    description: "null"
  },
  {
    title: "thirdweb-dashboard-web3",
    description: "null"
  },
  {
    title: "three.js",
    description: "JavaScript 3D Library."
  },
  {
    title: "threejs-nextjs",
    description: "null"
  },
  {
    title: "tmux",
    description: "tmux source code"
  },
  {
    title: "todo",
    description: "Just start!!!"
  },
  {
    title: "traefik",
    description: "The Cloud Native Application Proxy"
  },
  {
    title: "transform",
    description: "A polyglot web converter."
  },
  {
    title: "transformers",
    description: "🤗 Transformers: State-of-the-art Machine Learning for Pytorch, TensorFlow, and JAX."
  },
  {
    title: "trash",
    description: "Terabytes,Zetabytes,Qurdrillion"
  },
  {
    title: "trilium",
    description: "Build your personal knowledge base with Trilium Notes"
  },
  {
    title: "triplex",
    description: "▵ Visually edit React Three Fiber components where your code is source of truth."
  },
  {
    title: "trpc",
    description: "🧙‍♀️  Move Fast and Break Nothing. End-to-end typesafe APIs made easy. "
  },
  {
    title: "ts-rust-zig-deez",
    description: "rust obsidian visulizer"
  },
  {
    title: "tsuru",
    description: "Open source and extensible Platform as a Service (PaaS)."
  },
  {
    title: "tts",
    description: ":robot: :speech_balloon: Deep learning for Text to Speech  (Discussion forum: https://discourse.mozilla.org/c/tts)"
  },
  {
    title: "twemoji",
    description: "Emoji for everyone. https://twemoji.twitter.com/"
  },
  {
    title: "twitter-algorithm",
    description: "Source code for Twitter's Recommendation Algorithm"
  },
  {
    title: "twitter-website",
    description: "Twitter's open source website, identifying projects we've released, organizations we support, and the work we do to support open source."
  },
  {
    title: "typeahead.js",
    description: "typeahead.js is a fast and fully-featured autocomplete library"
  },
  {
    title: "typed-html",
    description: "TypeSafe HTML templates using TypeScript. No need to learn a template library."
  },
  {
    title: "typescript",
    description: "TypeScript is a superset of JavaScript that compiles to clean JavaScript output."
  },
  {
    title: "unioffice",
    description: "Pure go library for creating and processing Office Word (.docx), Excel (.xlsx) and Powerpoint (.pptx) documents"
  },
  {
    title: "unsplash",
    description: "Image Gallery app built with React, Tailwind CSS, Unsplash API, and Axios."
  },
  {
    title: "uppy",
    description: "The next open source file uploader for web browsers :dog: "
  },
  {
    title: "uptime-kuma",
    description: "A fancy self-hosted monitoring tool"
  },
  {
    title: "vagrant",
    description: "Vagrant is a tool for building and distributing development environments."
  },
  {
    title: "vault",
    description: "A tool for secrets management, encryption as a service, and privileged access management"
  },
  {
    title: "vercel",
    description: "Develop. Preview. Ship."
  },
  {
    title: "verdaccio",
    description: "📦🔐 A lightweight Node.js private proxy registry"
  },
  {
    title: "vesta",
    description: "VESTA Control Panel"
  },
  {
    title: "video-editor",
    description: "Free and open source video editor, based on MLT Framework and KDE Frameworks 5"
  },
  {
    title: "video.js",
    description: "Video.js - open source HTML5 video player"
  },
  {
    title: "visx",
    description: "🐯 visx | visualization components"
  },
  {
    title: "vlc",
    description: "VLC media player - All pull requests are ignored, please follow https://wiki.videolan.org/Sending_Patches_VLC/"
  },
  {
    title: "vscode",
    description: "Visual Studio Code"
  },
  {
    title: "vscode-material-icon-theme",
    description: "Available on the VSCode Marketplace"
  },
  {
    title: "vscode-power-mode",
    description: "Your code is powerful, unleash it! The extension made popular by Code in the Dark has finally made its way to VS Code."
  },
  {
    title: "vscodium-vscdoe",
    description: "null"
  },
  {
    title: "vue2-elm",
    description: "Large single page application with 45 pages built on vue2 + vuex. 基于 vue2 + vuex 构建一个具有 45 个页面的大型单页面应用"
  },
  {
    title: "wagtail",
    description: "A Django content management system focused on flexibility and user experience"
  },
  {
    title: "wallet-adapter",
    description: "Modular TypeScript wallet adapters and components for Solana applications."
  },
  {
    title: "walletconnect-monorepo",
    description: "WalletConnect Monorepo "
  },
  {
    title: "walleth",
    description: "free (libre) native Android Ethereum wallet"
  },
  {
    title: "web3-extension",
    description: "Taho, the community owned and operated Web3 wallet."
  },
  {
    title: "webgl-fluid-simulation",
    description: "Play with fluids in your browser (works even on mobile)"
  },
  {
    title: "webmin",
    description: "Powerful and flexible web-based server management control panel"
  },
  {
    title: "webstudio",
    description: "🖌 Webstudio Visual Builder"
  },
  {
    title: "whisper",
    description: "Robust Speech Recognition via Large-Scale Weak Supervision"
  },
  {
    title: "windows-terminal",
    description: "The new Windows Terminal and the original Windows console host, all in the same place!"
  },
  {
    title: "wrk",
    description: "Modern HTTP benchmarking tool"
  },
  {
    title: "x-decoder",
    description: "[CVPR 2023] Official Implementation of X-Decoder for generalized decoding for pixel, image and language"
  },
  {
    title: "xla",
    description: "A machine learning compiler for GPUs, CPUs, and ML accelerators"
  },
  {
    title: "xournalpp",
    description: "Xournal++ is a handwriting notetaking software with PDF annotation support. Written in C++ with GTK3, supporting Linux (e.g. Ubuntu, Debian, Arch, SUSE), macOS and Windows 10. Supports pen input from devices suchas Wacom Tablets."
  },
  {
    title: "you-get",
    description: ":arrow_double_down: Dumb downloader that scrapes the web"
  },
  {
    title: "youtube-api-samples",
    description: "Code samples for YouTube APIs, including the YouTube Data API, YouTube Analytics API, and YouTube Live Streaming API. The repo contains language-specific directories that contain the samples."
  },
  {
    title: "youtube-dl",
    description: "Command-line program to download videos from YouTube.com and other video sites"
  },
  {
    title: "zig",
    description: "General-purpose programming language and toolchain for maintaining robust, optimal, and reusable software."
  },
  {
    title: "zulip",
    description: "Zulip server and web application. Open-source team chat that helps teams stay productive and focused."
  },
  {
    title: "zx",
    description: "A tool for writing better scripts"
  },
]

export default function Home() {
  return (
    <>
      <section className="flex h-[100vh] w-[100%] flex-row flex-wrap items-center justify-center overflow-y-auto overflow-x-hidden pb-24">
        {github_repos.map((item, index) => (
          <div key={index} className="ml-3 mt-3 flex h-[200px] w-[250px] flex-col items-start justify-start overflow-y-auto overflow-x-hidden rounded-lg border p-5 hover:bg-[--code-foreground]">
            <h3 className="text-bold w-full text-left text-lg">{item.title}</h3>
            <span className="text-nowrap mt-2 w-full text-xs">{item.description}</span>
          </div>
        ))}
      </section>
      {/* <Examples /> */}
    </>

  )
}

{/* <div className="fluid-simulation-container w-[360px] max-w-[90%] h-[500px] overflow-y-auto overflow-x-hidden border rounded-lg p-5 space-y-3">
        <h1 className="w-full h-[50px] p-3 flex items-start justify-center hover:items-center hover:bg-[--code-foreground] bold text-md rounded-lg hover:animate-bounce">
          Fluid Simulation Controller
        </h1>
        <div className="quality-container flex items-start justify-between w-full">
          <span className="text-sm rounded-md hover:bg-[--code-foreground] p-2">
            Quality
          </span>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a Quality" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="medium">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="very-low">Very Low</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="simResolution-container flex items-start justify-between w-full">
          <span className="text-sm rounded-md hover:bg-[--code-foreground] p-2">
            Sim Re..
          </span>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue
                className="whitespace-nowrap w-[150px] text-sm text-ellipsis placeholder:text-red-600"
                placeholder="Select a Sim R.."
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="medium">32</SelectItem>
                <SelectItem value="medium">64</SelectItem>
                <SelectItem value="low">128</SelectItem>
                <SelectItem value="very-low">258</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="fluild-simulation-slider-conatainer w-full h-auto border rounded-lg flex items-center justify-between flex-col p-3 mt-3 space-y-2">
          <div className="fluild-simulation-slider-content flex items-start justify-between flex-row w-full">
            <span className="fluild-simulation-slider-title text-sm hover:bg-[--code-highlighted] rounded-md">
              Density Diffution
            </span>
            <div className="fluild-simulation-slider-rate text-xs bg-[--code-foreground] hover:bg-[--code-highlighted] rounded-xl p-2.5">
              2.0
            </div>
          </div>
          <div className="fluild-simulation-slider w-full">
            <Slider defaultValue={[2.0]} max={4} step={0.1} />
          </div>
        </div>
        <div className="fluild-simulation-slider-conatainer w-full h-auto border rounded-lg flex items-center justify-between flex-col p-3 mt-3 space-y-2">
          <div className="fluild-simulation-slider-content flex items-start justify-between flex-row w-full">
            <span className="fluild-simulation-slider-title text-sm hover:bg-[--code-highlighted] rounded-md">
              Velocity Diffution
            </span>
            <div className="fluild-simulation-slider-rate text-xs bg-[--code-foreground] hover:bg-[--code-highlighted] rounded-xl p-2.5">
              2.0
            </div>
          </div>
          <div className="fluild-simulation-slider w-full">
            <Slider defaultValue={[2.0]} max={4} step={0.1} />
          </div>
        </div>
        <div className="fluild-simulation-slider-conatainer w-full h-auto border rounded-lg flex items-center justify-between flex-col p-3 mt-3 space-y-2">
          <div className="fluild-simulation-slider-content flex items-start justify-between flex-row w-full">
            <span className="fluild-simulation-slider-title text-sm hover:bg-[--code-highlighted] rounded-md">
              Pressure
            </span>
            <div className="fluild-simulation-slider-rate text-xs bg-[--code-foreground] hover:bg-[--code-highlighted] rounded-xl p-2.5">
              2.0
            </div>
          </div>
          <div className="fluild-simulation-slider w-full">
            <Slider defaultValue={[2.0]} max={4} step={0.1} />
          </div>
        </div>
        <div className="fluild-simulation-slider-conatainer w-full h-auto border rounded-lg flex items-center justify-between flex-col p-3 mt-3 space-y-2">
          <div className="fluild-simulation-slider-content flex items-start justify-between flex-row w-full">
            <span className="fluild-simulation-slider-title text-sm hover:bg-[--code-highlighted] rounded-md">
              Velocity
            </span>
            <div className="fluild-simulation-slider-rate text-xs bg-[--code-foreground] hover:bg-[--code-highlighted] rounded-xl p-2.5">
              2.0
            </div>
          </div>
          <div className="fluild-simulation-slider w-full">
            <Slider defaultValue={[2.0]} max={4} step={0.1} />
          </div>
        </div>
        <div className="fluild-simulation-slider-conatainer w-full h-auto border rounded-lg flex items-center justify-between flex-col p-3 mt-3 space-y-2">
          <div className="fluild-simulation-slider-content flex items-start justify-between flex-row w-full">
            <span className="fluild-simulation-slider-title text-sm hover:bg-[--code-highlighted] rounded-md">
              Splat Radius
            </span>
            <div className="fluild-simulation-slider-rate text-xs bg-[--code-foreground] hover:bg-[--code-highlighted] rounded-xl p-2.5">
              2.0
            </div>
          </div>
          <div className="fluild-simulation-slider w-full">
            <Slider defaultValue={[2.0]} max={4} step={0.1} />
          </div>
        </div>

        <Form {...form}>
          <form
            className="h-auto w-full"
          >
            <FormField
              control={form.control}
              title="items"
              render={({ field }) => (
                <div className="space-y-3">
                  {items.map((item) => (
                    <FormItem
                      key={item.id}
                      className={cn(
                        buttonVariants({
                          variant: "ghost",
                        }),
                        "flex h-[50px] flex-row items-center justify-between rounded-lg border"
                      )}
                    >
                      <FormLabel className="flex items-center justify-center font-normal">
                        {item.label}
                      </FormLabel>
                      <FormControl className="flex items-center justify-center m-0 p-0">
                        <Checkbox
                          checked={field.value?.includes(item.id)}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...field.value, item.id])
                              : field.onChange(
                                  field.value?.filter(
                                    (value) => value !== item.id
                                  )
                                )
                          }}
                        />
                      </FormControl>
                    </FormItem>
                  ))}
                </div>
              )}
            />
          </form>
        </Form>

        <Collapsible
          open={bloom}
          onOpenChange={setBloom}
          className="w-full space-y-2"
        >
          <div className="flex items-center justify-between px-1">
            <h4 className="text-sm font-semibold">Bloom</h4>
            <CollapsibleTrigger asChild>
              <ButtonShadcnUi
                variant="ghost"
                size="sm"
                className="w-9 p-0 border ronded-lg"
              >
                <ChevronsUpDown className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </ButtonShadcnUi>
            </CollapsibleTrigger>
          </div>
          <div className="flex items-center justify-between rounded-md border px-4 py-3 font-mono text-sm">
            <h1>Enabled</h1>
            <Checkbox id="bloom" />
          </div>
          <CollapsibleContent className="space-y-2">
            <div className="fluild-simulation-slider-conatainer w-full h-auto border rounded-lg flex items-center justify-between flex-col p-3 mt-3 space-y-2">
              <div className="fluild-simulation-slider-content flex items-start justify-between flex-row w-full">
                <span className="fluild-simulation-slider-title text-sm hover:bg-[--code-highlighted] rounded-md">
                  Intensity
                </span>
                <div className="fluild-simulation-slider-rate text-xs bg-[--code-foreground] hover:bg-[--code-highlighted] rounded-xl p-2.5">
                  2.0
                </div>
              </div>
              <div className="fluild-simulation-slider w-full">
                <Slider defaultValue={[2.0]} max={4} step={0.1} />
              </div>
            </div>
            <div className="fluild-simulation-slider-conatainer w-full h-auto border rounded-lg flex items-center justify-between flex-col p-3 mt-3 space-y-2">
              <div className="fluild-simulation-slider-content flex items-start justify-between flex-row w-full">
                <span className="fluild-simulation-slider-title text-sm hover:bg-[--code-highlighted] rounded-md">
                  Theshold
                </span>
                <div className="fluild-simulation-slider-rate text-xs bg-[--code-foreground] hover:bg-[--code-highlighted] rounded-xl p-2.5">
                  2.0
                </div>
              </div>
              <div className="fluild-simulation-slider w-full">
                <Slider defaultValue={[2.0]} max={4} step={0.1} />
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible
          open={sunrays}
          onOpenChange={setSunrays}
          className="w-full space-y-2"
        >
          <div className="flex items-center justify-between px-1">
            <h4 className="text-sm font-semibold">Sunrays</h4>
            <CollapsibleTrigger asChild>
              <ButtonShadcnUi
                variant="ghost"
                size="sm"
                className="w-9 p-0 border ronded-lg"
              >
                <ChevronsUpDown className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </ButtonShadcnUi>
            </CollapsibleTrigger>
          </div>
          <div className="flex items-center justify-between rounded-md border px-4 py-3 font-mono text-sm">
            <h1>Enabled</h1>
            <Checkbox id="sunrays" />
          </div>
          <CollapsibleContent className="space-y-2">
            <div className="fluild-simulation-slider-conatainer w-full h-auto border rounded-lg flex items-center justify-between flex-col p-3 mt-3 space-y-2">
              <div className="fluild-simulation-slider-content flex items-start justify-between flex-row w-full">
                <span className="fluild-simulation-slider-title text-sm hover:bg-[--code-highlighted] rounded-md">
                  Weight
                </span>
                <div className="fluild-simulation-slider-rate text-xs bg-[--code-foreground] hover:bg-[--code-highlighted] rounded-xl p-2.5">
                  2.0
                </div>
              </div>
              <div className="fluild-simulation-slider w-full">
                <Slider defaultValue={[2.0]} max={4} step={0.1} />
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible
          open={capture}
          onOpenChange={setCapture}
          className="w-full space-y-2"
        >
          <div className="flex items-center justify-between px-1">
            <h4 className="text-sm font-semibold">Capture</h4>
            <CollapsibleTrigger asChild>
              <ButtonShadcnUi
                variant="ghost"
                size="sm"
                className="w-9 p-0  border ronded-lg"
              >
                <ChevronsUpDown className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </ButtonShadcnUi>
            </CollapsibleTrigger>
          </div>
          <div className="flex items-center justify-between rounded-md border px-4 py-3 font-mono text-sm">
            <h1>Transparent</h1>
            <Checkbox id="capture" />
          </div>

          <CollapsibleContent className="space-y-2">
            <div className="flex items-center justify-between rounded-md border px-4 py-3 font-mono text-sm">
              <h1>Background Color</h1>
              <h1>(coming soon)</h1>
            </div>
            <div className="rounded-md border px-4 py-3 font-mono text-sm">
              Take A Screenshot
            </div>
          </CollapsibleContent>
        </Collapsible>
</div> */}

