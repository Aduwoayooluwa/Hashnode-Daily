export function getLevelStyles(level: string) {
    const baseStyle = "border-2 shadow-lg rounded-lg p-4 max-w-sm";
    switch (level) {
        case 'Starter':
            return `${baseStyle} border-blue-500 text-blue-200`;
        case 'Novice':
            return `${baseStyle} border-green-500 text-green-200`;
        case 'Professional':
            return `${baseStyle} border-yellow-500 text-yellow-200`;
        case 'Boss':
            return `${baseStyle} border-orange-500 text-orange-200`;
        case 'Chief':
            return `${baseStyle} border-red-500 text-red-200`;
        case 'Mentor':
            return `${baseStyle} border-purple-500 text-purple-200`;
        default:
            return baseStyle;
    }
}
