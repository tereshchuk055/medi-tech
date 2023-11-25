type ShowErrorMessageType = {
    error: any
};

export default function ShowErrorMessage({ error }: ShowErrorMessageType) {
    return (
        <label className="text-red-600 text-xs ml-1">{error}</label>
    );
}
