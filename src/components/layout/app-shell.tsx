"use client";

import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { useSidebar } from "@/store/use-sidebar";
import { cn } from "@/lib/utils";
import { SettingsModal } from "@/components/ui/settings-modal";

interface AppShellProps {
	children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
	const { isOpen, setIsOpen } = useSidebar();

	return (
		<div className="min-h-screen bg-background text-foreground">
			<Sidebar />

			{isOpen && <div onClick={() => setIsOpen(false)} className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm md:hidden animate-in fade-in duration-300" />}

			<div
				className={cn(
					"flex flex-1 flex-col transition-all duration-300 ease-in-out",
					isOpen ? "md:ml-72" : "md:ml-20",
					"ml-0"
				)}
			>
				<Header />

				<main className="flex-1 overflow-auto p-4 md:p-6 lg:p-8">{children}</main>

				<SettingsModal />
			</div>
		</div>
	);
}
