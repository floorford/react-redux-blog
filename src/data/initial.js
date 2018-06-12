const initial = {
  articles: {
    1: {
        id: 1,
        title: "Post #1",
        article: "<p>Blah blah blah</p>",
        comments: [
            { email: "bob@bob.com", comment: "Great blog post" },
        ],
        tags: ["blah", "monkeys"],
    },
    2: {
        id: 2,
        title: "Post #2",
        article: "<p>Blah blah blah</p>",
        comments: [
            { email: "sandi@sandi.com", comment: "I disagree, but not in an agressive and unpleasant manner" },
        ],
        tags: ["blah", "fish-fingers"],
    },
  }
};

export default initial;
