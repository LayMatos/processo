export const getFileFromEvent = (e: React.ChangeEvent<HTMLInputElement>): File | null => {
    return e.target.files ? e.target.files[0] : null;
};

  