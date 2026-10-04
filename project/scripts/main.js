// Array of objects representing catalog items
const resources = [
    {
        id: 1,
        title: "HTML5 Semantic Layouts",
        category: "beginner",
        description: "Master document structure, accessibility roles, and clean semantic markup.",
        level: "Beginner"
    },
    {
        id: 2,
        title: "CSS Grid & Flexbox Mastery",
        category: "beginner",
        description: "Build responsive multi-column layouts with absolute precision and modern syntax.",
        level: "Beginner"
    },
    {
        id: 3,
        title: "ES6+ Arrow Functions & Scope",
        category: "advanced",
        description: "Deep dive into lexical scoping, higher-order functions, and closures.",
        level: "Advanced"
    },
    {
        id: 4,
        title: "DOM Manipulation & Events",
        category: "beginner",
        description: "React to user input dynamically and update the document tree on the fly.",
        level: "Beginner"
    },
    {
        id: 5,
        title: "localStorage & Session State",
        category: "advanced",
        description: "Persist user preferences and review history across browser sessions.",
        level: "Advanced"
    },
    {
        id: 6,
        title: "Responsive Media Queries",
        category: "advanced",
        description: "Scale your design seamlessly across mobile screens, tablets, and wide monitors.",
        level: "Advanced"
    }
];

// Function to render items using Template Literals exclusively
function displayResources(items) {
    const container = document.getElementById("catalog-container");
    if (!container) return;

    // Clear existing content
    container.innerHTML = "";

    // Loop through array using forEach
    items.forEach(item => {
        // Exclusively using template literals (` `) for building strings
        const cardHTML = `
            <div class="catalog-card">
                <h3>${item.title}</h3>
                <span class="badge ${item.category}">${item.level}</span>
                <p>${item.description}</p>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

// DOMContentLoaded Event Listener & Conditional Branching for Filters
document.addEventListener("DOMContentLoaded", () => {
    // Initial render of all resources
    displayResources(resources);

    const filterButtons = document.querySelectorAll(".filter-btn");

    filterButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));
            // Add active class to clicked button
            e.target.classList.add("active");

            const filterType = e.target.id;

            // Conditional branching & Array filter method
            if (filterType === "all") {
                displayResources(resources);
            } else {
                const filtered = resources.filter(res => res.category === filterType);
                displayResources(filtered);
            }
        });
    });
});
// --- localStorage Review / Submission Counter Logic ---
document.addEventListener("DOMContentLoaded", () => {
    // Check if we are on the form page and handle submission tracking
    const formElement = document.getElementById("community-form");
    const counterSpan = document.getElementById("submissionCounter");

    if (counterSpan) {
        // Retrieve current count from localStorage or initialize to 0
        let submissionCount = Number(localStorage.getItem("devcraftSubmissions-ls")) || 0;
        counterSpan.textContent = submissionCount;

        if (formElement) {
            formElement.addEventListener("submit", () => {
                // Increment and save to localStorage on submit
                submissionCount++;
                localStorage.setItem("devcraftSubmissions-ls", submissionCount);
            });
        }
    }
});