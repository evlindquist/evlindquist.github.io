class VocabWord 
{
    constructor(word, partOfSpeech, definition) 
    {
      this.word = word;
      this.partOfSpeech = partOfSpeech;
      this.definition = definition;
    }

    getString() 
    {
        return `${this.word} (${this.partOfSpeech}) - ${this.definition}`;
    }
}