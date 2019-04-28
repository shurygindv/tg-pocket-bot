export const withPromise = (callback: () => void): Promise<void> => {
    return new Promise(
        (resolver: () => void): void => {
            callback();
            resolver();
        },
    );
};
