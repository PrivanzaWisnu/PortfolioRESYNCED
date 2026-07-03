"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { en } from "@/locales/en";
import { id } from "@/locales/id";
import { jp } from "@/locales/jp";
import { useSettingsStore } from "@/store/use-settings";

const greetings = [en.hero.greeting, id.hero.greeting, jp.hero.greeting];

export function RotatingGreeting() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [fade, setFade] = useState(true);
	const { reduceMotion } = useSettingsStore();

	useEffect(() => {
		const timer = setInterval(() => {
			if (reduceMotion) {
				setCurrentIndex(prev => (prev + 1) % greetings.length);
				return;
			}

			setFade(false);
			setTimeout(() => {
				setCurrentIndex(prev => (prev + 1) % greetings.length);
				setFade(true);
			}, 600);
		}, 8000);

		return () => clearInterval(timer);
	}, [reduceMotion]);

	return (
		<div className="min-h-[120px] sm:min-h-[140px] md:min-h-[160px] flex items-center">
			<h1 className={cn(
				"text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-primary ease-in-out", 
				reduceMotion ? "transition-none" : "transition-opacity duration-700",
				fade ? "opacity-100" : "opacity-0"
			)}>
				{greetings[currentIndex]}
			</h1>
		</div>
	);
}