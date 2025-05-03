export type ErrorType = {
	message: string;
	status: string;
	payload: string | null;
	success: boolean;
};

export type ApiResponse<T> = {
	status?: string;
	message: string;
	payload: T | null;
	success: boolean;
	error?: ErrorType | null;
};