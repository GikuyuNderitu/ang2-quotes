export class Quote {
    message: string;
    author: string;
    rank: number;

    constructor(message?: string, author?: string) {
        this.message = message || '';
        this.author = author || '';
        this.rank = 0;
    }
}
