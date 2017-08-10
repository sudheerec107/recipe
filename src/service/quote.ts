import { Quotes } from '../data/quote.interface';

export class QuoteService {
    private favoriteQuote: Quotes[] = [];

    addQuoteToFavorites(quote: Quotes) {
        this.favoriteQuote.push(quote);
        console.log(this.favoriteQuote);
    }

    removeFromFavorites(quote: Quotes) {
        const position = this.favoriteQuote.findIndex((quoteInd: Quotes) => {
            return quoteInd.id == quote.id;
        });
        this.favoriteQuote.splice(position, 1);
    }

    getFavoriteQuotes() {
        return this.favoriteQuote.slice();
    }

    isfavQuote(quote: Quotes) {
        return this.favoriteQuote.find((quoteEl: Quotes) => {
            return quote.id == quoteEl.id;
        });
    }
}