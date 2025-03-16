"use client"

import React from "react"
import { BrainCircuit, EyeOff, Code, Camera, Gamepad2, Image, MessageSquareText } from "lucide-react"

export interface ProjectCard {
    title: string
    description: string
    icon: React.ReactNode
    bgColor: string
    image?: string
    techStack: { name: string; icon: string }[]
    link: string
}

export const projects: ProjectCard[] = [
    {
        title: "Drona",
        description: "An AI-powered education assistant designed to personalize learning experiences.",
        icon: <BrainCircuit className="h-5 w-5" />,
        bgColor: "bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30",
        image: "/image/drona.png",
        techStack: [
            { name: "Python", icon: "/icons/python.svg" },
            { name: "LangChain", icon: "/icons/langchain.svg" },
            { name: "NextJs", icon: "/icons/nextjs.svg" },
        ],
        link : "https://drona-three.vercel.app/"
    },
    {
        title: "Deepfake Detection",
        description: "A model that identifies deepfake videos using AI and computer vision techniques.",
        icon: <EyeOff className="h-5 w-5" />,
        bgColor: "bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30",
        techStack: [
            { name: "PyTorch", icon: "/icons/pytorch.svg" },
            { name: "OpenCV", icon: "/icons/opencv.svg" },
            { name: "Keras", icon: "/icons/keras.svg" },
        ],
        link : "https://www.kaggle.com/code/armanchaudhary/deepfake-detection-using-cnn-rnn"
    },
    {
        title: "ResNet from Scratch",
        description: "Implementing the ResNet architecture from the ground up for deep learning applications.",
        icon: <Image className="h-5 w-5" />,
        bgColor: "bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-950/30 dark:to-blue-950/30",
        techStack: [
            { name: "PyTorch", icon: "/icons/pytorch.svg" },
            { name: "NumPy", icon: "/icons/numpy.svg" },
            { name: "Matplotlib", icon: "/icons/matplotlib.svg" },
        ],
        link : "https://github.com/Arman176001/ResNet-From-Scratch"
    },
    {
        title: "GPT from Scratch",
        description: "Building a Generative Pre-trained Transformer from the ground up.",
        icon: <Code className="h-5 w-5" />,
        bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30",
        techStack: [
            { name: "Python", icon: "/icons/python.svg" },
            { name: "PyTorch", icon: "/icons/pytorch.svg" },
            { name: "Hugging Face", icon: "/icons/hugging-face.svg" },
        ],
        link : "https://github.com/Arman176001/ChatGPT-from-scratch"
    },
    {
        title: "Twacha AI",
        description: "A facial dermatologist AI that analyzes skin conditions using computer vision.",
        icon: <Camera className="h-5 w-5" />,
        bgColor: "bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950/30 dark:to-teal-950/30",
        image: "/image/TwachaAI.png",
        techStack: [
            { name: "YOLO", icon: "/icons/yolo.svg" },
            { name: "FastAPI", icon: "/icons/fastAPI.svg" },
            { name: "React", icon: "/icons/react.svg" },
        ],
        link : "https://github.com/kaavya7705/twacha-ai"
    },
    {
        title: "FlappyBird AI",
        description: "An AI agent trained to play Flappy Bird using reinforcement learning.",
        icon: <Gamepad2 className="h-5 w-5" />,
        bgColor: "bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/30",
        image: "/image/FlappyBirdAI.gif",
        techStack: [
            { name: "Python", icon: "/icons/python.svg" },
            { name: "PyTorch", icon: "/icons/pytorch.svg" },
            { name: "Gym", icon: "/icons/gymnasium.svg" },
        ],
        link : "https://github.com/Arman176001/FlappyBirdAI"
    },

    {
        title: "YouTube Comments Sentiment Analysis",
        description: "Performing sentiment analysis on YouTube comments using NLP.",
        icon: <MessageSquareText className="h-5 w-5" />,
        bgColor: "bg-gradient-to-br from-pink-50 to-red-50 dark:from-pink-950/30 dark:to-red-950/30",
        image: "/image/LoopBack.png",
        techStack: [
            { name: "Hugging Face", icon: "/icons/hugging-face.svg" },
            { name: "Llama", icon: "/icons/meta.svg" },
            { name: "NextJs", icon: "/icons/nextjs.svg" },
        ],
        link : "https://v0-youtube-comments-analysis-yqfe2qef2im-arman176001s-projects.vercel.app/"
    },
];
