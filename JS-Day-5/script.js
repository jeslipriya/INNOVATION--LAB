function textAnalyzer() {
    const text = document.getElementById("paragraph").value;
    const totalChar = text.length;

    const words = text.match(/\b\w+\b/g) || [];
    const totalWords = words.length;

    const totalSentences = (text.match(/[.!?]/g) || []).length;

    const uniqueWords = [...new Set(words.map(w => w.toLowerCase()))];

    const freq = {};
    words.forEach(word => {
        const w = word.toLowerCase();
        freq[w] = (freq[w] || 0) + 1;
    });

    const sortedFreq = Object.entries(freq).sort((a, b) => b[1] - a[1]);

    const result = `
Total Characters: ${totalChar}
Total Words: ${totalWords}
Total Sentences: ${totalSentences}
Unique Words: ${uniqueWords.length}
Word Frequency:
${sortedFreq.map(([word, count]) => `${word}: ${count}`).join("\n")}
    `;

    document.getElementById("result").textContent = result;
}
