import { Question, UsesAbilities } from '../../../serenity/screenplay';
import { BrowseTheWeb } from '../abilities/browse_the_web';
import { Target } from '../ui/target';

export class Text {
    static of(element: Target): Question<string> {
        return new TextOf(element);
    }

    static ofAll(elements: Target): Question<string[]> {
        return new TextOfAll(elements);
    }
}

class TextOf implements Question<string> {

    answeredBy(actor: UsesAbilities): PromiseLike<string> {
        return BrowseTheWeb.as(actor).locate(this.target).getText();
    }

    constructor(private target: Target) {
    }
}

class TextOfAll implements Question<string[]> {

    answeredBy(actor: UsesAbilities): PromiseLike<string[]> {
        return BrowseTheWeb.as(actor).locateAll(this.target).getText();
    }

    constructor(private target: Target) {
    }
}
