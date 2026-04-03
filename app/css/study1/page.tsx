
import { SimpleThemeToggle } from "../../../components/SimpleThemeToggle";

export default function CssStudy1() {
    return (
        <>
            <div className="flex flex-col min-h-screen bg-background">
                <div className="mb-8 flex justify-between px-6 py-4 text-foreground shadow-lg bg-custom-surface">
                    <h1 className="text-lg font-bold">My website</h1>
                    <nav className="flex gap-4 items-center">
                        <a href="#" className="text-foreground hover:text-custom-primary">Home</a>
                        <a href="#" className="text-foreground hover:text-custom-primary">Blog</a>
                        <a href="#" className="text-foreground hover:text-custom-primary">Contact</a>
                        <SimpleThemeToggle />
                    </nav>
                </div>

                <div className="flex-1 p-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl font-bold text-foreground mb-6">Custom Variables Demo</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 bg-custom-surface rounded-lg border border-custom-define-a-color">
                                <h3 className="text-lg font-semibold text-foreground mb-3">Using Custom Variables</h3>
                                <p className="text-foreground mb-4">
                                    This card uses <code className="bg-custom-define-a-color px-2 py-1 rounded text-foreground">bg-custom-surface</code> and <code className="bg-custom-define-a-color px-2 py-1 rounded text-foreground">border-custom-define-a-color</code>
                                </p>
                                <button className="px-4 py-2 bg-custom-primary text-white rounded hover:bg-opacity-80 transition-colors">
                                    Custom Primary Button
                                </button>
                            </div>

                            <div className="p-6 bg-background rounded-lg border border-custom-define-a-color">
                                <h3 className="text-lg font-semibold text-foreground mb-3">Theme Switching</h3>
                                <p className="text-foreground mb-4">
                                    Click the moon/sun button above to toggle between light and dark themes.
                                    All colors automatically update based on CSS custom properties.
                                </p>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-4 bg-custom-primary rounded"></div>
                                        <span className="text-foreground">Primary color</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-4 bg-custom-surface rounded"></div>
                                        <span className="text-foreground">Surface color</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-4 bg-custom-define-a-color rounded"></div>
                                        <span className="text-foreground">Custom defined color</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
