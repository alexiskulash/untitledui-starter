import { LoadingIndicator } from "./loading-indicator";

export const LoadingScreen = () => {
    return (
        <div className="flex h-dvh w-full items-center justify-center bg-primary">
            <LoadingIndicator type="dot-circle" size="xl" label="Loading" />
        </div>
    );
}
