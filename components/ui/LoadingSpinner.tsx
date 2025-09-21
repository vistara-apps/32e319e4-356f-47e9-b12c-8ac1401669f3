export function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-8 h-8 border-4 border-accent/20 border-t-accent rounded-full animate-spin" />
      <p className="text-text-secondary text-sm">Loading...</p>
    </div>
  );
}
