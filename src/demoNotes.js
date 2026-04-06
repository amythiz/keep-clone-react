export const demoNotes = [
  {
    id: 1,
    title: "Quick idea",
    content: "Buy milk and bread after work."
  },
  {
    id: 2,
    title: "Meeting notes",
    content: "Discussed Q2 goals.\nAction items: update roadmap, schedule design review, send recap to team.\nDeadline: Friday."
  },
  {
    id: 3,
    title: "React snippet",
    content: "useEffect(() => { fetchData(); }, []);\nCleanup function: return () => cancelRequest();"
  },
  {
    id: 4,
    title: "Longer reflection",
    content: "The project is moving faster than expected.\nWe need to ensure the new authentication flow is properly tested.\nAlso consider adding error boundaries.\nThe API rate limits might become an issue after launch – prepare a fallback caching strategy.\nTalk to backend team about pagination improvements."
  },
  {
    id: 5,
    title: "Weekend plan",
    content: "Hiking on Saturday morning.\nBring water, snacks, sunscreen.\nSunday: read 'Atomic Habits' and clean the garage."
  },
  {
    id: 6,
    title: "Very long note – testing layout wrapping",
    content: "Lorem ipsum odor amet, consectetuer adipiscing elit.\nTorquent iaculis himenaeos aenean parturient posuere dictumst primis.\nRidiculus montes faucibus ligula adipiscing duis adipiscing sed torquent.\nPlatea suscipit euismod sociosqu libero ultrices scelerisque condimentum.\nInceptos quis massa donec nisl ac nisl diam adipiscing.\nMus consectetur congue orci dictum est netus fusce.\nPharetra fusce augue amet litora elementum ex suscipit.\nVelit venenatis ridiculus accumsan quisque imperdiet pharetra sociosqu.\nHabitasse ullamcorper leo fermentum semper consectetur.\nMalesuada libero accumsan aliquam velit habitant tempor vulputate.\nSem netus sit ex elit donec metus habitant.\nAdipiscing ornare mi condimentum egestas vestibulum nibh vehicula rhoncus.\nRidiculus in maecenas sollicitudin viverra semper viverra."
  },
  {
    id: 7,
    title: "Checklist",
    content: "- Write tests\n- Update README\n- Deploy to staging\n- Notify QA\n- Merge PR after approval"
  },
  // Additional notes below
  {
    id: 8,
    title: "Design inspiration",
    content: "Check out Awwwards and Dribbble for new dashboard layouts.\nMinimal glassmorphism trend might fit our product."
  },
  {
    id: 9,
    title: "Medium-length technical note",
    content: "When using React 18 with StrictMode, effects run twice in development.\nTo avoid duplicate API calls, use a ref to track mounting or upgrade to React Query.\nAlso, remember that setState updates are batched inside event handlers but not inside promises or timeouts without unstable_batchedUpdates."
  },
  {
    id: 10,
    title: "Grocery list (expanded)",
    content: "• Apples (Granny Smith)\n• Whole wheat bread\n• Almond milk\n• Eggs (organic)\n• Avocados (3 ripe)\n• Dark chocolate (70%+)\n• Coffee beans – medium roast"
  },
  {
    id: 11,
    title: "Random thought",
    content: "Why do we press harder on the remote when the battery is low?"
  },
  {
    id: 12,
    title: "Long productivity note",
    content: "The Pomodoro technique works well for deep work: 25 min focus, 5 min break.\nAfter 4 cycles take a longer 15–20 min break.\nUse a physical timer to avoid phone distractions.\nAlso, batch similar tasks (emails, Slack messages) into two 30-minute slots per day.\nThis reduces context switching and saves mental energy.\nConsider using a kanban board (Trello or physical sticky notes) to visualize progress.\nEnd each day by writing the top 3 priorities for tomorrow."
  },
  {
    id: 13,
    title: "Code review feedback",
    content: "Please rename `data` to `userProfile` for clarity.\nAdd JSDoc comments.\nThe ternary inside JSX is a bit hard to read – extract into a small helper component.\nAlso, the `useEffect` missing cleanup for event listeners."
  },
  {
    id: 14,
    title: "Book summary – 'Thinking, Fast and Slow'",
    content: "System 1: fast, intuitive, emotional.\nSystem 2: slower, deliberate, logical.\nCognitive biases include anchoring, availability heuristic, loss aversion.\nTo make better decisions, slow down and engage System 2 for important choices.\nRecognize when your intuition might be misleading you (e.g., statistical base rates ignored)."
  },
  {
    id: 15,
    title: "Fitness goal",
    content: "Run 5k three times this week.\nStretch before and after.\nTrack pace with Strava.\nTarget: under 30 minutes."
  },
  {
    id: 16,
    title: "Project idea – habit tracker",
    content: "Build a minimal habit tracker with a heatmap calendar (like GitHub contributions).\nFeatures: add custom habits, mark daily completion, view streaks.\nTech: React + IndexedDB (local) or Firebase for sync.\nNo unnecessary animations, just clean data visualization."
  }
];