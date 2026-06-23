document.addEventListener('DOMContentLoaded', () => {
    // --- 32 CBSE QUESTION DATABASE ---
    const quests = [
        // CHAPTER 1: SUMMONING & BINDING (Access & Insertion)
        {
            id: 1, chapter: 1, chapterName: "Summoning & Binding",
            title: "Initialize Empty Vault",
            cbseContext: "Dictionary Initialization",
            narrative: "To begin recording the wizard guild treasures, initialize an empty dictionary named 'chest'.",
            mode: "code",
            initialState: null,
            targetState: {},
            codeSnippet: `<span class="code-comment"># Initialize chest as an empty dictionary</span>\n<span class="code-variable">chest</span> = [INPUT]`,
            expectedPatterns: [/^(chest\s*=\s*)?\{\s*\}$/, /^(chest\s*=\s*)?dict\(\s*\)$/],
            hint: "CBSE Hint: Create an empty dictionary using curly brackets <code>{}</code> or the constructor <code>dict()</code>.",
            terminalOutput: [
                { text: ">>> chest = {}", type: "prompt" },
                { text: "type(chest) -> <class 'dict'>", type: "success" },
                { text: "Vault chest initialized empty and ready!", type: "success" }
            ]
        },
        {
            id: 2, chapter: 1, chapterName: "Summoning & Binding",
            title: "Summon the Gold",
            cbseContext: "Adding Key-Value Pair",
            narrative: "Add a key 'Gold' with a value of 100 to the chest to record your initial capital.",
            mode: "drag", dragType: "in",
            initialState: {},
            targetState: {"Gold": 100},
            codeSnippet: `<span class="code-comment"># Add 'Gold' with value 100</span>\n<span class="code-variable">chest</span>[<span class="code-string">'Gold'</span>] = 100`,
            dragItem: { key: "Gold", val: 100, icon: "fa-solid fa-coins" },
            hint: "Drag the Gold card from the shelf and drop it INTO the chest to execute the assignment statement.",
            terminalOutput: [
                { text: ">>> chest['Gold'] = 100", type: "prompt" },
                { text: "chest -> {'Gold': 100}", type: "success" },
                { text: "100 Gold coins locked in the vault!", type: "success" }
            ]
        },
        {
            id: 3, chapter: 1, chapterName: "Summoning & Binding",
            title: "Increase Vault Gold",
            cbseContext: "Modifying Existing Value",
            narrative: "Modify the existing 'Gold' key-value pair. Increase the total gold in the chest to 250.",
            mode: "drag", dragType: "in",
            initialState: {"Gold": 100},
            targetState: {"Gold": 250},
            codeSnippet: `<span class="code-comment"># Update 'Gold' value to 250</span>\n<span class="code-variable">chest</span>[<span class="code-string">'Gold'</span>] = 250`,
            dragItem: { key: "Gold", val: 250, icon: "fa-solid fa-coins" },
            hint: "Updating a key uses the same syntax as insertion. Drag the Gold:250 card into the chest to replace the old value.",
            terminalOutput: [
                { text: ">>> chest['Gold'] = 250", type: "prompt" },
                { text: "chest -> {'Gold': 250}", type: "success" },
                { text: "Gold reserves increased successfully!", type: "success" }
            ]
        },
        {
            id: 4, chapter: 1, chapterName: "Summoning & Binding",
            title: "Access Potion Supplies",
            cbseContext: "Accessing Dictionary Values",
            narrative: "Write the code syntax to access the value of 'Potion' in the chest to read the current supply.",
            mode: "code",
            initialState: {"Gold": 250, "Potion": 5},
            targetState: {"Gold": 250, "Potion": 5},
            codeSnippet: `<span class="code-comment"># Access value of key 'Potion'</span>\n<span class="code-variable">count</span> = [INPUT]`,
            expectedPatterns: [/^(chest\s*\[\s*(['"])Potion\2\s*\])$/, /^chest\.get\(\s*(['"])Potion\1\s*\)$/],
            hint: "CBSE Hint: Access a value using bracket notation <code>dict[key]</code> or the <code>dict.get(key)</code> method.",
            terminalOutput: [
                { text: ">>> count = chest['Potion']", type: "prompt" },
                { text: "count -> 5", type: "success" },
                { text: "Successfully read supply count!", type: "success" }
            ]
        },
        {
            id: 5, chapter: 1, chapterName: "Summoning & Binding",
            title: "Safely Seek the Key",
            cbseContext: "Safely Accessing with .get()",
            narrative: "Search for a missing item 'Key' in the chest. Write the syntax to return 0 if the key is not found (safely avoiding KeyError).",
            mode: "code",
            initialState: {"Gold": 250, "Potion": 5},
            targetState: {"Gold": 250, "Potion": 5},
            codeSnippet: `<span class="code-comment"># Get 'Key', return 0 if missing</span>\n<span class="code-variable">key_count</span> = [INPUT]`,
            expectedPatterns: [/^chest\.get\(\s*(['"])Key\1\s*,\s*0\s*\)$/],
            hint: "CBSE Hint: The <code>dict.get(key, default)</code> method returns the default value if the key does not exist.",
            terminalOutput: [
                { text: ">>> key_count = chest.get('Key', 0)", type: "prompt" },
                { text: "key_count -> 0", type: "success" },
                { text: "Safe retrieval completed without error!", type: "success" }
            ]
        },
        {
            id: 6, chapter: 1, chapterName: "Summoning & Binding",
            title: "Default the Shields",
            cbseContext: "Inserting with setdefault()",
            narrative: "Ensure the vault has a 'Shield' key set to 1. Use a method that sets the default only if the key is missing.",
            mode: "drag", dragType: "in",
            initialState: {"Gold": 250, "Potion": 5},
            targetState: {"Gold": 250, "Potion": 5, "Shield": 1},
            codeSnippet: `<span class="code-comment"># Set default 'Shield' to 1</span>\n<span class="code-variable">chest</span>.setdefault(<span class="code-string">'Shield'</span>, 1)`,
            dragItem: { key: "Shield", val: 1, icon: "fa-solid fa-shield-halved" },
            hint: "Drag the Shield:1 card into the chest. <code>setdefault()</code> inserts the key with value if not already present.",
            terminalOutput: [
                { text: ">>> chest.setdefault('Shield', 1)", type: "prompt" },
                { text: "chest -> {'Gold': 250, 'Potion': 5, 'Shield': 1}", type: "success" },
                { text: "Default shield count initialized!", type: "success" }
            ]
        },
        {
            id: 7, chapter: 1, chapterName: "Summoning & Binding",
            title: "Detect the Amulet",
            cbseContext: "Membership Testing (in operator)",
            narrative: "Write the logical expression to check if the string 'Amulet' is present as a key in the chest.",
            mode: "code",
            initialState: {"Gold": 250, "Potion": 5, "Shield": 1},
            targetState: {"Gold": 250, "Potion": 5, "Shield": 1},
            codeSnippet: `<span class="code-comment"># Check if 'Amulet' is in the keys</span>\n<span class="code-variable">exists</span> = [INPUT]`,
            expectedPatterns: [/^(['"])Amulet\1\s+in\s+chest$/],
            hint: "CBSE Hint: Use the membership operator <code>in</code> (e.g. <code>key in dict</code>). Returns True or False.",
            terminalOutput: [
                { text: ">>> exists = 'Amulet' in chest", type: "prompt" },
                { text: "exists -> False", type: "success" },
                { text: "Membership check executed!", type: "success" }
            ]
        },
        {
            id: 8, chapter: 1, chapterName: "Summoning & Binding",
            title: "Nested Scrolls Lookup",
            cbseContext: "Accessing Nested Dictionaries",
            narrative: "Your chest holds a sub-dictionary 'Scrolls' containing spell counts. Write the code to access the 'Heal' scroll count.",
            mode: "code",
            initialState: {"Gold": 250, "Scrolls": {"Heal": 3, "Fire": 1}},
            targetState: {"Gold": 250, "Scrolls": {"Heal": 3, "Fire": 1}},
            codeSnippet: `<span class="code-comment"># Read count of 'Heal' inside sub-dict 'Scrolls'</span>\n<span class="code-variable">heal_spells</span> = [INPUT]`,
            expectedPatterns: [/^(chest\s*\[\s*(['"])Scrolls\2\s*\]\s*\[\s*(['"])Heal\3\s*\])$/],
            hint: "CBSE Hint: Chain bracket access indices together, e.g., <code>dict[parent_key][child_key]</code>.",
            terminalOutput: [
                { text: ">>> heal_spells = chest['Scrolls']['Heal']", type: "prompt" },
                { text: "heal_spells -> 3", type: "success" },
                { text: "Nested scroll count retrieved!", type: "success" }
            ]
        },

        // CHAPTER 2: ALCHEMICAL FUSION (Merging & Copying)
        {
            id: 9, chapter: 2, chapterName: "Alchemical Fusion",
            title: "Merge Spell Pouch",
            cbseContext: "Merging with update()",
            narrative: "You found a spell pouch: {'Ruby': 2}. Cast a spell to merge its contents into the main chest using update().",
            mode: "drag", dragType: "in",
            initialState: {"Gold": 250},
            targetState: {"Gold": 250, "Ruby": 2},
            codeSnippet: `<span class="code-comment"># Merge pouch into chest</span>\n<span class="code-variable">pouch</span> = {<span class="code-string">'Ruby'</span>: 2}\n<span class="code-variable">chest</span>.update(<span class="code-variable">pouch</span>)`,
            dragItem: { key: "Ruby", val: 2, icon: "fa-solid fa-gem" },
            hint: "Drag the Ruby:2 card into the chest. The <code>update()</code> method appends key-value pairs in-place.",
            terminalOutput: [
                { text: ">>> pouch = {'Ruby': 2}", type: "prompt" },
                { text: ">>> chest.update(pouch)", type: "prompt" },
                { text: "chest -> {'Gold': 250, 'Ruby': 2}", type: "success" },
                { text: "Pouch contents merged into vault!", type: "success" }
            ]
        },
        {
            id: 10, chapter: 2, chapterName: "Alchemical Fusion",
            title: "Sync Potion Stores",
            cbseContext: "Overwriting during update()",
            narrative: "Merge a restock delivery {'Potion': 10} into a chest that already has 3 potions, overwriting the old value.",
            mode: "drag", dragType: "in",
            initialState: {"Gold": 250, "Potion": 3},
            targetState: {"Gold": 250, "Potion": 10},
            codeSnippet: `<span class="code-comment"># Merge updates existing keys</span>\n<span class="code-variable">chest</span>.update({<span class="code-string">'Potion'</span>: 10})`,
            dragItem: { key: "Potion", val: 10, icon: "fa-solid fa-flask" },
            hint: "Drag Potion:10 into the chest. <code>update()</code> replaces duplicate keys with values from the source dictionary.",
            terminalOutput: [
                { text: ">>> chest.update({'Potion': 10})", type: "prompt" },
                { text: "chest -> {'Gold': 250, 'Potion': 10}", type: "success" },
                { text: "Potion records updated to 10!", type: "success" }
            ]
        },
        {
            id: 11, chapter: 2, chapterName: "Alchemical Fusion",
            title: "Clone the Vault",
            cbseContext: "Copying with copy()",
            narrative: "Write the code syntax to create a shallow clone of 'chest' and assign it to the variable 'new_chest'.",
            mode: "code",
            initialState: {"Gold": 250},
            targetState: {"Gold": 250},
            codeSnippet: `<span class="code-comment"># Clone the chest dictionary</span>\n<span class="code-variable">new_chest</span> = [INPUT]`,
            expectedPatterns: [/^(chest\.copy\(\s*\))$/],
            hint: "CBSE Hint: Use the <code>dict.copy()</code> method to duplicate a dictionary without linking variables.",
            terminalOutput: [
                { text: ">>> new_chest = chest.copy()", type: "prompt" },
                { text: "new_chest == chest -> True", type: "success" },
                { text: "Shallow clone created successfully!", type: "success" }
            ]
        },
        {
            id: 12, chapter: 2, chapterName: "Alchemical Fusion",
            title: "Unpack & Fuse",
            cbseContext: "Merging via Unpacking (**)",
            narrative: "Write the code syntax to merge 'chest' and 'pouch' into a new dictionary 'merged' using unpacking operators.",
            mode: "code",
            initialState: {"Gold": 100},
            targetState: {"Gold": 100},
            codeSnippet: `<span class="code-comment"># Unpack chest and pouch into merged</span>\n<span class="code-variable">pouch</span> = {<span class="code-string">'Key'</span>: 1}\n<span class="code-variable">merged</span> = [INPUT]`,
            expectedPatterns: [/^(\{\s*\*\*\s*chest\s*,\s*\*\*\s*pouch\s*\})$/, /^(\{\s*\*\*\s*pouch\s*,\s*\*\*\s*chest\s*\})$/],
            hint: "CBSE Hint: Use double asterisks to unpack dictionary items inside curly brackets: <code>{**dict1, **dict2}</code>.",
            terminalOutput: [
                { text: ">>> merged = {**chest, **pouch}", type: "prompt" },
                { text: "merged -> {'Gold': 100, 'Key': 1}", type: "success" },
                { text: "Dictionaries unpacked and fused!", type: "success" }
            ]
        },
        {
            id: 13, chapter: 2, chapterName: "Alchemical Fusion",
            title: "The Union Sign",
            cbseContext: "Dictionary Union Operator (|)",
            narrative: "Write the expression to merge 'chest' and 'pouch' using the Python 3.9+ dictionary union operator (|).",
            mode: "code",
            initialState: {"Gold": 100},
            targetState: {"Gold": 100},
            codeSnippet: `<span class="code-comment"># Merge using union operator</span>\n<span class="code-variable">merged</span> = [INPUT]`,
            expectedPatterns: [/^(chest\s*\|\s*pouch)$/, /^(pouch\s*\|\s*chest)$/],
            hint: "CBSE Hint: The pipe symbol <code>|</code> combines two dictionaries. If there are duplicates, the right operand wins.",
            terminalOutput: [
                { text: ">>> merged = chest | pouch", type: "prompt" },
                { text: "merged -> {'Gold': 100, 'Key': 1}", type: "success" },
                { text: "Union merge calculated!", type: "success" }
            ]
        },
        {
            id: 14, chapter: 2, chapterName: "Alchemical Fusion",
            title: "In-Place Union",
            cbseContext: "Update Union Operator (|=)",
            narrative: "Merge a pouch {'Key': 1} into 'chest' in-place using the compound union assignment operator (|=).",
            mode: "drag", dragType: "in",
            initialState: {"Gold": 100},
            targetState: {"Gold": 100, "Key": 1},
            codeSnippet: `<span class="code-comment"># In-place union update</span>\n<span class="code-variable">pouch</span> = {<span class="code-string">'Key'</span>: 1}\n<span class="code-variable">chest</span> |= <span class="code-variable">pouch</span>`,
            dragItem: { key: "Key", val: 1, icon: "fa-solid fa-key" },
            hint: "Drag Key:1 into the chest. The <code>|=</code> operator updates the calling dictionary in-place.",
            terminalOutput: [
                { text: ">>> chest |= pouch", type: "prompt" },
                { text: "chest -> {'Gold': 100, 'Key': 1}", type: "success" },
                { text: "In-place union update complete!", type: "success" }
            ]
        },
        {
            id: 15, chapter: 2, chapterName: "Alchemical Fusion",
            title: "Tuple to Dictionary",
            cbseContext: "dict() constructor on lists",
            narrative: "Convert a list of key-value tuples: items = [('Ruby', 5)] into a dictionary. Write the syntax.",
            mode: "code",
            initialState: {},
            targetState: {},
            codeSnippet: `<span class="code-comment"># Construct dict from list of tuples</span>\n<span class="code-variable">items</span> = [(<span class="code-string">'Ruby'</span>, 5)]\n<span class="code-variable">chest</span> = [INPUT]`,
            expectedPatterns: [/^dict\(\s*items\s*\)$/],
            hint: "CBSE Hint: The <code>dict()</code> constructor can convert a sequence of key-value pairs (like list of tuples) into a dictionary.",
            terminalOutput: [
                { text: ">>> chest = dict(items)", type: "prompt" },
                { text: "chest -> {'Ruby': 5}", type: "success" },
                { text: "Sequences converted to Dictionary!", type: "success" }
            ]
        },
        {
            id: 16, chapter: 2, chapterName: "Alchemical Fusion",
            title: "Create From Keys",
            cbseContext: "dict.fromkeys() method",
            narrative: "Initialize keys ['Gold', 'Mana'] each with a starting value of 0 using dict.fromkeys().",
            mode: "drag", dragType: "in",
            initialState: {},
            targetState: {"Gold": 0, "Mana": 0},
            codeSnippet: `<span class="code-comment"># Create dict from keys list</span>\n<span class="code-variable">chest</span> = dict.fromkeys([<span class="code-string">'Gold'</span>, <span class="code-string">'Mana'</span>], 0)`,
            dragItem: { key: "Gold", val: 0, icon: "fa-solid fa-coins" },
            hint: "Drag the Gold:0 token into the chest to complete the multi-key default initializer script.",
            terminalOutput: [
                { text: ">>> chest = dict.fromkeys(['Gold', 'Mana'], 0)", type: "prompt" },
                { text: "chest -> {'Gold': 0, 'Mana': 0}", type: "success" },
                { text: "Keys generated with default value 0!", type: "success" }
            ]
        },

        // CHAPTER 3: BANISHMENT SPELLS (Deletion & Clearing)
        {
            id: 17, chapter: 3, chapterName: "Banishment Spells",
            title: "Banish the Poison",
            cbseContext: "Deleting with del statement",
            narrative: "Remove the hazardous key 'Poison' from the chest using the Python 'del' statement.",
            mode: "drag", dragType: "out",
            initialState: {"Gold": 100, "Poison": 3},
            targetState: {"Gold": 100},
            codeSnippet: `<span class="code-comment"># Delete key 'Poison'</span>\ndel <span class="code-variable">chest</span>[<span class="code-string">'Poison'</span>]`,
            dragItem: { key: "Poison", val: 3, icon: "fa-solid fa-skull-crossbones" },
            hint: "Drag the Poison:3 item OUT of the chest and drop it onto the pink swirly Dispelling Portal.",
            terminalOutput: [
                { text: ">>> del chest['Poison']", type: "prompt" },
                { text: "chest -> {'Gold': 100}", type: "success" },
                { text: "Poison deleted. Vault sanitized!", type: "success" }
            ]
        },
        {
            id: 18, chapter: 3, chapterName: "Banishment Spells",
            title: "Pop the Curse",
            cbseContext: "Removing with pop()",
            narrative: "Extract 'Curse' from the chest using the pop() method. This deletes the key and returns its value.",
            mode: "drag", dragType: "out",
            initialState: {"Gold": 100, "Curse": 1},
            targetState: {"Gold": 100},
            codeSnippet: `<span class="code-comment"># Pop key 'Curse'</span>\n<span class="code-variable">chest</span>.pop(<span class="code-string">'Curse'</span>)`,
            dragItem: { key: "Curse", val: 1, icon: "fa-solid fa-ghost" },
            hint: "Drag the Curse:1 item OUT of the chest and drop it onto the Dispelling Portal.",
            terminalOutput: [
                { text: ">>> chest.pop('Curse')", type: "prompt" },
                { text: "Returned value -> 1", type: "success" },
                { text: "Curse popped and dispelled!", type: "success" }
            ]
        },
        {
            id: 19, chapter: 3, chapterName: "Banishment Spells",
            title: "Safe Pop Banishment",
            cbseContext: "pop() with fallback default",
            narrative: "Write the code syntax to pop 'Curse' safely. Return the string 'None' if 'Curse' doesn't exist.",
            mode: "code",
            initialState: {"Gold": 100},
            targetState: {"Gold": 100},
            codeSnippet: `<span class="code-comment"># Pop 'Curse' safely, default to 'None'</span>\n<span class="code-variable">result</span> = [INPUT]`,
            expectedPatterns: [/^chest\.pop\(\s*(['"])Curse\1\s*,\s*(['"])None\2\s*\)$/],
            hint: "CBSE Hint: Use <code>pop(key, default)</code>. If the key is not in the dictionary, it returns the default value.",
            terminalOutput: [
                { text: ">>> result = chest.pop('Curse', 'None')", type: "prompt" },
                { text: "result -> 'None'", type: "success" },
                { text: "Popped missing key safely with default!", type: "success" }
            ]
        },
        {
            id: 20, chapter: 3, chapterName: "Banishment Spells",
            title: "LIFO Banishment",
            cbseContext: "Removing with popitem()",
            narrative: "Write the code to remove the last inserted key-value pair from the chest in LIFO order.",
            mode: "code",
            initialState: {"Gold": 100, "Potion": 5},
            targetState: {"Gold": 100},
            codeSnippet: `<span class="code-comment"># Remove last inserted key-value tuple</span>\n<span class="code-variable">item</span> = [INPUT]`,
            expectedPatterns: [/^(chest\.popitem\(\s*\))$/],
            hint: "CBSE Hint: The <code>dict.popitem()</code> method removes and returns the last key-value pair as a tuple.",
            terminalOutput: [
                { text: ">>> item = chest.popitem()", type: "prompt" },
                { text: "item -> ('Potion', 5)", type: "success" },
                { text: "Last inserted item popped!", type: "success" }
            ]
        },
        {
            id: 21, chapter: 3, chapterName: "Banishment Spells",
            title: "Evacuate the Vault",
            cbseContext: "Clearing with clear()",
            narrative: "Empty the entire chest in a single statement to clear all active assets from the vault.",
            mode: "drag", dragType: "out",
            initialState: {"Gold": 100, "Shield": 2},
            targetState: {},
            codeSnippet: `<span class="code-comment"># Clear all dictionary elements</span>\n<span class="code-variable">chest</span>.clear()`,
            dragItem: { key: "Gold", val: 100, icon: "fa-solid fa-coins" },
            hint: "Drag the remaining Gold out to clear the vault. The <code>clear()</code> method deletes all items.",
            terminalOutput: [
                { text: ">>> chest.clear()", type: "prompt" },
                { text: "chest -> {}", type: "success" },
                { text: "Vault cleared. All contents deleted!", type: "success" }
            ]
        },
        {
            id: 22, chapter: 3, chapterName: "Banishment Spells",
            title: "Banish by Variable",
            cbseContext: "Deleting using variables",
            narrative: "Write the statement to delete a key from 'chest' using the string variable: key_name = 'Curse'.",
            mode: "code",
            initialState: {"Gold": 100, "Curse": 1},
            targetState: {"Gold": 100},
            codeSnippet: `<span class="code-comment"># Remove key using variable key_name</span>\n<span class="code-variable">key_name</span> = <span class="code-string">'Curse'</span>\n[INPUT]`,
            expectedPatterns: [/^(del\s+chest\s*\[\s*key_name\s*\])$/, /^(chest\.pop\(\s*key_name\s*\))$/],
            hint: "CBSE Hint: Place the variable inside index brackets: <code>del dict[var]</code> or pass it: <code>dict.pop(var)</code>.",
            terminalOutput: [
                { text: ">>> del chest[key_name]", type: "prompt" },
                { text: "chest -> {'Gold': 100}", type: "success" },
                { text: "Banishment by variable reference completed!", type: "success" }
            ]
        },
        {
            id: 23, chapter: 3, chapterName: "Banishment Spells",
            title: "Purge Cursed Keys",
            cbseContext: "Looping and deleting",
            narrative: "Write the loop header statement to iterate over a copy of chest keys so you can delete items during loop: 'for k in list(chest):'",
            mode: "code",
            initialState: {"Curse": 1},
            targetState: {"Curse": 1},
            codeSnippet: `<span class="code-comment"># Loop keys list safely to delete items</span>\n[INPUT]:\n    <span class="code-keyword">del</span> <span class="code-variable">chest</span>[k]`,
            expectedPatterns: [/^(for\s+k\s+in\s+list\(\s*chest\s*\))$/, /^(for\s+k\s+in\s+list\(\s*chest\.keys\(\s*\)\s*\))$/],
            hint: "CBSE Hint: Modifying a dict while iterating raises a error. Iterate over a list clone: <code>for k in list(dict):</code>.",
            terminalOutput: [
                { text: ">>> for k in list(chest): del chest[k]", type: "prompt" },
                { text: "chest -> {}", type: "success" },
                { text: "Safe loop purge completed!", type: "success" }
            ]
        },
        {
            id: 24, chapter: 3, chapterName: "Banishment Spells",
            title: "Banish Nested Scroll",
            cbseContext: "Deleting nested dictionary keys",
            narrative: "Remove the 'Dark' key inside the nested 'Scrolls' dictionary. Write the del statement.",
            mode: "drag", dragType: "out",
            initialState: {"Scrolls": {"Heal": 2, "Dark": 1}},
            targetState: {"Scrolls": {"Heal": 2}},
            codeSnippet: `<span class="code-comment"># Banish nested 'Dark' spell</span>\ndel <span class="code-variable">chest</span>[<span class="code-string">'Scrolls'</span>][<span class="code-string">'Dark'</span>]`,
            dragItem: { key: "Dark", val: 1, icon: "fa-solid fa-scroll" },
            hint: "Drag Dark:1 out to the Portal. Deleting nested keys targets the parent key index first.",
            terminalOutput: [
                { text: ">>> del chest['Scrolls']['Dark']", type: "prompt" },
                { text: "chest -> {'Scrolls': {'Heal': 2}}", type: "success" },
                { text: "Nested curse scroll banished!", type: "success" }
            ]
        },

        // CHAPTER 4: DIVINATION (Keys, Values, & Views)
        {
            id: 25, chapter: 4, chapterName: "Divination",
            title: "Keys Divination",
            cbseContext: "keys() view method",
            narrative: "Write the code syntax to extract all keys in the chest to inspect which treasures are inside.",
            mode: "code",
            initialState: {"Gold": 100, "Potion": 5},
            targetState: {"Gold": 100, "Potion": 5},
            codeSnippet: `<span class="code-comment"># Get view of keys</span>\n<span class="code-variable">vault_keys</span> = [INPUT]`,
            expectedPatterns: [/^(chest\.keys\(\s*\))$/],
            hint: "CBSE Hint: Use the <code>dict.keys()</code> method to return a dynamic view of all keys in the dictionary.",
            terminalOutput: [
                { text: ">>> vault_keys = chest.keys()", type: "prompt" },
                { text: "vault_keys -> dict_keys(['Gold', 'Potion'])", type: "success" },
                { text: "Keys view retrieved successfully!", type: "success" }
            ]
        },
        {
            id: 26, chapter: 4, chapterName: "Divination",
            title: "Values Divination",
            cbseContext: "values() view method",
            narrative: "Write the code syntax to extract all item quantities/values currently locked in the chest.",
            mode: "code",
            initialState: {"Gold": 100, "Potion": 5},
            targetState: {"Gold": 100, "Potion": 5},
            codeSnippet: `<span class="code-comment"># Get view of values</span>\n<span class="code-variable">vault_values</span> = [INPUT]`,
            expectedPatterns: [/^(chest\.values\(\s*\))$/],
            hint: "CBSE Hint: Use the <code>dict.values()</code> method to return a dynamic view of all values in the dictionary.",
            terminalOutput: [
                { text: ">>> vault_values = chest.values()", type: "prompt" },
                { text: "vault_values -> dict_values([100, 5])", type: "success" },
                { text: "Values view retrieved successfully!", type: "success" }
            ]
        },
        {
            id: 27, chapter: 4, chapterName: "Divination",
            title: "Items Divination",
            cbseContext: "items() view method",
            narrative: "Write the code to extract a list of all key-value tuples from the chest for ledger logging.",
            mode: "code",
            initialState: {"Gold": 100, "Potion": 5},
            targetState: {"Gold": 100, "Potion": 5},
            codeSnippet: `<span class="code-comment"># Get view of key-value tuples</span>\n<span class="code-variable">ledger</span> = [INPUT]`,
            expectedPatterns: [/^(chest\.items\(\s*\))$/],
            hint: "CBSE Hint: Use the <code>dict.items()</code> method to return a view of all (key, value) tuples.",
            terminalOutput: [
                { text: ">>> ledger = chest.items()", type: "prompt" },
                { text: "ledger -> dict_items([('Gold', 100), ('Potion', 5)])", type: "success" },
                { text: "Key-value item tuples retrieved!", type: "success" }
            ]
        },
        {
            id: 28, chapter: 4, chapterName: "Divination",
            title: "Measure the Vault",
            cbseContext: "len() built-in function",
            narrative: "Write the expression to count the total number of unique keys present in the chest.",
            mode: "code",
            initialState: {"Gold": 100, "Potion": 5, "Shield": 2},
            targetState: {"Gold": 100, "Potion": 5, "Shield": 2},
            codeSnippet: `<span class="code-comment"># Count number of key-value pairs</span>\n<span class="code-variable">size</span> = [INPUT]`,
            expectedPatterns: [/^(len\(\s*chest\s*\))$/],
            hint: "CBSE Hint: Use the built-in <code>len(dict)</code> function to return the total key-value count.",
            terminalOutput: [
                { text: ">>> size = len(chest)", type: "prompt" },
                { text: "size -> 3", type: "success" },
                { text: "Length of dictionary measured!", type: "success" }
            ]
        },
        {
            id: 29, chapter: 4, chapterName: "Divination",
            title: "Walk the Keys",
            cbseContext: "Iterating keys",
            narrative: "Write a loop header to iterate over the keys in 'chest' using 'key' as the loop variable.",
            mode: "code",
            initialState: {"Gold": 100},
            targetState: {"Gold": 100},
            codeSnippet: `<span class="code-comment"># Loop through keys</span>\n[INPUT]:\n    <span class="code-keyword">print</span>(key)`,
            expectedPatterns: [/^(for\s+key\s+in\s+chest)$/, /^(for\s+key\s+in\s+chest\.keys\(\s*\))$/],
            hint: "CBSE Hint: Iterating directly over a dict yields its keys: <code>for key in dict:</code>.",
            terminalOutput: [
                { text: ">>> for key in chest: print(key)", type: "prompt" },
                { text: "Gold", type: "success" },
                { text: "Keys loop executed successfully!", type: "success" }
            ]
        },
        {
            id: 30, chapter: 4, chapterName: "Divination",
            title: "Unpack in Loop",
            cbseContext: "Iterating key-value pairs",
            narrative: "Write the loop header statement to unpack keys into 'k' and values into 'v' using the items() view.",
            mode: "code",
            initialState: {"Gold": 100},
            targetState: {"Gold": 100},
            codeSnippet: `<span class="code-comment"># Loop key and value unpacking</span>\n[INPUT]:\n    <span class="code-keyword">print</span>(k, v)`,
            expectedPatterns: [/^(for\s+k\s*,\s*v\s+in\s+chest\.items\(\s*\))$/],
            hint: "CBSE Hint: Unpack tuples using: <code>for k, v in dict.items():</code>.",
            terminalOutput: [
                { text: ">>> for k, v in chest.items(): print(k, v)", type: "prompt" },
                { text: "Gold 100", type: "success" },
                { text: "Unpacked items loop executed!", type: "success" }
            ]
        },
        {
            id: 31, chapter: 4, chapterName: "Divination",
            title: "Sort the Ledger",
            cbseContext: "sorted() function on keys",
            narrative: "Write the syntax to get an alphabetically sorted list of keys from 'chest' to display them neatly.",
            mode: "code",
            initialState: {"Shield": 2, "Gold": 100, "Potion": 5},
            targetState: {"Shield": 2, "Gold": 100, "Potion": 5},
            codeSnippet: `<span class="code-comment"># Get alphabetically sorted keys list</span>\n<span class="code-variable">sorted_keys</span> = [INPUT]`,
            expectedPatterns: [/^(sorted\(\s*chest\s*\))$/, /^(sorted\(\s*chest\.keys\(\s*\)\s*\))$/],
            hint: "CBSE Hint: The <code>sorted(dict)</code> function returns a new sorted list of keys from the dictionary.",
            terminalOutput: [
                { text: ">>> sorted_keys = sorted(chest)", type: "prompt" },
                { text: "sorted_keys -> ['Gold', 'Potion', 'Shield']", type: "success" },
                { text: "Ledger sorted alphabetically!", type: "success" }
            ]
        },
        {
            id: 32, chapter: 4, chapterName: "Divination",
            title: "Sort the Quantities",
            cbseContext: "sorted() function on values",
            narrative: "Write the syntax to get a sorted list of the chest's quantities/values (e.g. [2, 5, 100]).",
            mode: "code",
            initialState: {"Shield": 2, "Gold": 100, "Potion": 5},
            targetState: {"Shield": 2, "Gold": 100, "Potion": 5},
            codeSnippet: `<span class="code-comment"># Get sorted list of values</span>\n<span class="code-variable">sorted_vals</span> = [INPUT]`,
            expectedPatterns: [/^sorted\(\s*chest\.values\(\s*\)\s*\)$/],
            hint: "CBSE Hint: Call sorted on the values view: <code>sorted(dict.values())</code>.",
            terminalOutput: [
                { text: ">>> sorted_vals = sorted(chest.values())", type: "prompt" },
                { text: "sorted_vals -> [2, 5, 100]", type: "success" },
                { text: "Quantities sorted numerically!", type: "success" }
            ]
        }
    ];

    let currentQuestIdx = 0;
    let activeChestState = {};
    let selectedShelfItemText = null;
    let selectedVaultItemText = null;

    // --- WEB AUDIO API SYNTHESIZER ---
    let audioCtx = null;

    const initAudio = () => {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
    };

    const playCreak = () => {
        initAudio();
        if (!audioCtx) return;
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(70, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(160, audioCtx.currentTime + 0.5);
        gainNode.gain.setValueAtTime(0.12, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);
        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.5);
    };

    const playChime = () => {
        initAudio();
        if (!audioCtx) return;
        const now = audioCtx.currentTime;
        const frequencies = [523.25, 659.25, 783.99, 1046.50]; // C Major arpeggio
        frequencies.forEach((freq, idx) => {
            const osc = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();
            osc.type = 'sine';
            osc.frequency.value = freq;
            gainNode.gain.setValueAtTime(0, now + idx * 0.07);
            gainNode.gain.linearRampToValueAtTime(0.1, now + idx * 0.07 + 0.02);
            gainNode.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.07 + 0.4);
            osc.connect(gainNode);
            gainNode.connect(audioCtx.destination);
            osc.start(now + idx * 0.07);
            osc.stop(now + idx * 0.07 + 0.45);
        });
    };

    const playBuzz = () => {
        initAudio();
        if (!audioCtx) return;
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(130, audioCtx.currentTime);
        osc.frequency.linearRampToValueAtTime(80, audioCtx.currentTime + 0.4);
        gainNode.gain.setValueAtTime(0.12, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.4);
        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.4);
    };

    const playVictory = () => {
        initAudio();
        if (!audioCtx) return;
        const now = audioCtx.currentTime;
        const chord1 = [261.63, 329.63, 392.00, 523.25];
        const chord2 = [349.23, 440.00, 523.25, 698.46];
        const chord3 = [392.00, 493.88, 587.33, 783.99];
        const chord4 = [523.25, 659.25, 783.99, 1046.50];
        
        const playChord = (chord, startOffset) => {
            chord.forEach((freq, idx) => {
                const osc = audioCtx.createOscillator();
                const gainNode = audioCtx.createGain();
                osc.type = 'triangle';
                osc.frequency.value = freq;
                gainNode.gain.setValueAtTime(0, now + startOffset + idx * 0.04);
                gainNode.gain.linearRampToValueAtTime(0.06, now + startOffset + idx * 0.04 + 0.02);
                gainNode.gain.exponentialRampToValueAtTime(0.001, now + startOffset + idx * 0.04 + 0.65);
                osc.connect(gainNode);
                gainNode.connect(audioCtx.destination);
                osc.start(now + startOffset + idx * 0.04);
                osc.stop(now + startOffset + idx * 0.04 + 0.7);
            });
        };
        playChord(chord1, 0);
        playChord(chord2, 0.4);
        playChord(chord3, 0.8);
        playChord(chord4, 1.2);
    };

    // --- TERMINAL LOG PRINTER ---
    const appendTerminalLine = (text, type) => {
        const terminalBody = document.getElementById('terminal-log-body');
        const line = document.createElement('div');
        line.className = 'terminal-line';
        if (type === 'prompt') {
            line.innerHTML = `<span class="terminal-prompt">&gt;&gt;&gt;</span> ${text}`;
        } else if (type === 'success') {
            line.innerHTML = `<span class="terminal-success">${text}</span>`;
        } else if (type === 'error') {
            line.innerHTML = `<span class="terminal-error"><i class="fa-solid fa-triangle-exclamation"></i> ${text}</span>`;
        } else {
            line.className = 'terminal-line terminal-info';
            line.textContent = text;
        }
        terminalBody.appendChild(line);
        terminalBody.scrollTop = terminalBody.scrollHeight;
    };

    const printTerminalSequence = (lines) => {
        const terminalBody = document.getElementById('terminal-log-body');
        terminalBody.innerHTML = '';
        lines.forEach((line, idx) => {
            setTimeout(() => {
                appendTerminalLine(line.text, line.type);
            }, idx * 450);
        });
    };

    // --- RENDER VAULT & SHELF ---
    const renderChestContents = () => {
        const vaultView = document.getElementById('chest-vault-view');
        vaultView.innerHTML = '';
        
        // Loop over active state
        for (const [key, val] of Object.entries(activeChestState)) {
            // Determine icon
            let icon = "fa-solid fa-scroll";
            if (key.includes("Gold")) icon = "fa-solid fa-coins";
            else if (key.includes("Potion")) icon = "fa-solid fa-flask";
            else if (key.includes("Shield")) icon = "fa-solid fa-shield-halved";
            else if (key.includes("Key")) icon = "fa-solid fa-key";
            else if (key.includes("Ruby") || key.includes("Sapphire")) icon = "fa-solid fa-gem";
            else if (key.includes("Poison")) icon = "fa-solid fa-skull-crossbones";
            else if (key.includes("Curse")) icon = "fa-solid fa-ghost";

            const itemNode = document.createElement('div');
            itemNode.className = 'vault-item';
            itemNode.setAttribute('draggable', 'true');
            itemNode.setAttribute('data-key', key);
            itemNode.innerHTML = `<i class="${icon}"></i> ${key}:${val}`;
            
            // Drag Start
            itemNode.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', key);
                e.dataTransfer.setData('source', 'vault');
                itemNode.classList.add('dragging');
                initAudio();
            });
            itemNode.addEventListener('dragend', () => {
                itemNode.classList.remove('dragging');
            });
            
            // Mobile Click selector
            itemNode.addEventListener('click', (e) => {
                e.stopPropagation(); // Avoid triggering chest click
                initAudio();
                document.querySelectorAll('.vault-item, .item-token').forEach(c => c.classList.remove('selected'));
                itemNode.classList.add('selected');
                selectedVaultItemText = key;
                selectedShelfItemText = null;
            });
            
            vaultView.appendChild(itemNode);
        }
    };

    const renderShelf = (quest) => {
        const shelf = document.getElementById('item-shelf');
        shelf.innerHTML = '';
        
        if (quest.mode === 'drag' && quest.dragItem) {
            const dragInfo = quest.dragItem;
            const token = document.createElement('div');
            token.className = 'item-token';
            token.setAttribute('draggable', 'true');
            token.setAttribute('data-key', dragInfo.key);
            token.setAttribute('data-val', dragInfo.val);
            token.innerHTML = `<i class="${dragInfo.icon}"></i> ${dragInfo.key}:${dragInfo.val}`;
            
            // Drag listeners
            token.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', JSON.stringify(dragInfo));
                e.dataTransfer.setData('source', 'shelf');
                token.classList.add('dragging');
                initAudio();
            });
            token.addEventListener('dragend', () => {
                token.classList.remove('dragging');
            });
            
            // Mobile click fallback
            token.addEventListener('click', () => {
                initAudio();
                document.querySelectorAll('.vault-item, .item-token').forEach(c => c.classList.remove('selected'));
                token.classList.add('selected');
                selectedShelfItemText = JSON.stringify(dragInfo);
                selectedVaultItemText = null;
            });
            
            shelf.appendChild(token);
        } else {
            shelf.innerHTML = '<div style="grid-column: span 2; color: #64748b; font-size: 0.8rem; text-align: center; padding-top: 2rem;">No inventory tokens available for this quest.</div>';
        }
    };

    // --- SIDEBAR MAP BUILDER ---
    const buildSidebarMap = () => {
        const groups = {};
        quests.forEach(q => {
            if (!groups[q.chapter]) {
                groups[q.chapter] = {
                    name: q.chapterName,
                    quests: []
                };
            }
            groups[q.chapter].quests.push(q);
        });

        const sidebar = document.getElementById('chapter-sidebar-list');
        sidebar.innerHTML = '';

        for (const [chapId, chapData] of Object.entries(groups)) {
            const groupDiv = document.createElement('div');
            groupDiv.className = 'chapter-group';
            
            const header = document.createElement('div');
            header.className = 'chapter-header';
            header.innerHTML = `<span>Chapter ${chapId}: ${chapData.name}</span> <span style="font-size: 0.75rem; color:#a1a1aa;">${chapData.quests.length} Quests</span>`;
            groupDiv.appendChild(header);

            const qList = document.createElement('ul');
            qList.className = 'quest-list';

            chapData.quests.forEach(q => {
                const item = document.createElement('li');
                item.className = 'quest-item';
                item.setAttribute('data-id', q.id);
                
                // Determine icon state
                let stateIcon = '<i class="fa-regular fa-circle"></i>';
                if (q.id - 1 < currentQuestIdx) {
                    item.classList.add('completed');
                    stateIcon = '<i class="fa-solid fa-check-circle"></i>';
                } else if (q.id - 1 === currentQuestIdx) {
                    item.classList.add('active');
                    stateIcon = '<i class="fa-solid fa-wand-magic-sparkles fa-pulse"></i>';
                }

                item.innerHTML = `<span>Q${q.id}: ${q.title}</span> ${stateIcon}`;
                
                // Click navigation (only to active or completed quests to prevent skipping ahead)
                item.addEventListener('click', () => {
                    if (q.id - 1 <= currentQuestIdx) {
                        currentQuestIdx = q.id - 1;
                        loadQuest(currentQuestIdx);
                    } else {
                        playBuzz();
                        appendTerminalLine(`Cannot skip forward. Complete Quest ${currentQuestIdx + 1} first!`, "error");
                    }
                });

                qList.appendChild(item);
            });

            groupDiv.appendChild(qList);
            sidebar.appendChild(groupDiv);
        }
    };

    // --- RENDER / LOAD QUEST ---
    const loadQuest = (index) => {
        if (index >= quests.length) return;
        const quest = quests[index];
        
        // Update live state to match initial
        activeChestState = quest.initialState ? JSON.parse(JSON.stringify(quest.initialState)) : {};
        renderChestContents();
        renderShelf(quest);
        buildSidebarMap();

        // Update narrative elements
        document.getElementById('quest-num').textContent = quest.id;
        document.getElementById('quest-title').textContent = quest.title;
        document.getElementById('cbse-context').textContent = quest.cbseContext;
        document.getElementById('quest-story-text').textContent = quest.narrative;
        
        // Hide hint box
        const hintBox = document.getElementById('hint-scroll-box');
        hintBox.style.display = 'none';
        hintBox.innerHTML = quest.hint;

        // Render code block or inputs based on mode
        const codeBox = document.getElementById('code-template-box');
        const inputArea = document.getElementById('terminal-input-block');
        const inputField = document.getElementById('console-input-textbox');
        const chestObj = document.getElementById('royal-vault-chest');

        // Reset inputs
        inputField.value = '';
        selectedShelfItemText = null;
        selectedVaultItemText = null;

        if (quest.mode === 'code') {
            // Mode 2: Action -> Syntax
            // Set code snippet with placeholder
            codeBox.innerHTML = quest.codeSnippet.replace('[INPUT]', '<span class="spell-slot" style="border-style: solid; min-width: 180px;"><span class="spell-slot-content" style="background: rgba(56, 189, 248, 0.1); color: #38bdf8; border: 1px dashed #38bdf8;">type syntax in console</span></span>');
            
            // Show terminal input block
            inputArea.style.display = 'flex';
            inputField.focus();

            // Set chest to open visually so user can see contents
            chestObj.classList.add('open');

            appendTerminalLine("Observe the vault contents and enter the correct Python statement below.", "info");
        } else {
            // Mode 1: Syntax -> Action
            codeBox.innerHTML = quest.codeSnippet;
            
            // Hide terminal input block
            inputArea.style.display = 'none';

            // Start chest closed
            chestObj.classList.remove('open');

            appendTerminalLine("Read the syntax and drag the correct items to make the chest match.", "info");
        }

        // Update progress bar
        const progressFill = document.getElementById('progress-meter-fill');
        const progressText = document.getElementById('progress-percentage');
        const progressPercentage = Math.floor((index / quests.length) * 100);
        progressFill.style.width = `${progressPercentage}%`;
        progressText.textContent = `${progressPercentage}%`;
    };

    // --- CODE FORMULATION VALIDATOR ---
    const validateCodeConsole = () => {
        const inputField = document.getElementById('console-input-textbox');
        const rawInput = inputField.value.trim();
        if (!rawInput) return;

        const currentQuest = quests[currentQuestIdx];
        let matched = false;

        // Validate against expected regex patterns
        for (const pattern of currentQuest.expectedPatterns) {
            if (pattern.test(rawInput)) {
                matched = true;
                break;
            }
        }

        if (matched) {
            // Correct Code Statement
            playChime();
            inputField.style.color = '#22c55e';
            
            // Apply state transitions to chest if any
            activeChestState = JSON.parse(JSON.stringify(currentQuest.targetState));
            renderChestContents();

            printTerminalSequence(currentQuest.terminalOutput);

            // Turn off input focus
            inputField.blur();
            inputField.style.pointerEvents = 'none';

            // Transition next quest
            setTimeout(() => {
                inputField.style.pointerEvents = 'auto';
                inputField.style.color = '';
                currentQuestIdx++;
                if (currentQuestIdx < quests.length) {
                    loadQuest(currentQuestIdx);
                } else {
                    triggerVictory();
                }
            }, currentQuest.terminalOutput.length * 450 + 1500);

        } else {
            // Incorrect syntax
            playBuzz();
            inputField.style.color = '#ef4444';
            appendTerminalLine(`>>> ${rawInput}`, "prompt");
            appendTerminalLine("SyntaxError: The spell formulation is incorrect.", "error");

            const hintBox = document.getElementById('hint-scroll-box');
            hintBox.style.display = 'block';

            setTimeout(() => {
                inputField.style.color = '';
            }, 1500);
        }
    };

    // Console trigger on Enter key
    const inputField = document.getElementById('console-input-textbox');
    inputField.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            validateCodeConsole();
        }
    });

    // --- DRAG AND DROP HANDLERS ---
    const chestContainer = document.getElementById('royal-vault-chest');
    const portalContainer = document.getElementById('dispelling-portal');

    // 1. Dragging over chest (Adding items)
    chestContainer.addEventListener('dragover', (e) => {
        e.preventDefault();
        const currentQuest = quests[currentQuestIdx];
        if (currentQuest.mode === 'drag' && currentQuest.dragType === 'in') {
            chestContainer.classList.add('drag-over');
        }
    });
    chestContainer.addEventListener('dragleave', () => {
        chestContainer.classList.remove('drag-over');
    });
    chestContainer.addEventListener('drop', (e) => {
        e.preventDefault();
        chestContainer.classList.remove('drag-over');
        const source = e.dataTransfer.getData('source');
        if (source === 'shelf') {
            const dragInfo = JSON.parse(e.dataTransfer.getData('text/plain'));
            validateDragAction(dragInfo.key, dragInfo.val, 'in');
        }
    });

    // 2. Dragging over portal (Removing items)
    portalContainer.addEventListener('dragover', (e) => {
        e.preventDefault();
        const currentQuest = quests[currentQuestIdx];
        if (currentQuest.mode === 'drag' && currentQuest.dragType === 'out') {
            portalContainer.classList.add('drag-over');
        }
    });
    portalContainer.addEventListener('dragleave', () => {
        portalContainer.classList.remove('drag-over');
    });
    portalContainer.addEventListener('drop', (e) => {
        e.preventDefault();
        portalContainer.classList.remove('drag-over');
        const source = e.dataTransfer.getData('source');
        if (source === 'vault') {
            const key = e.dataTransfer.getData('text/plain');
            validateDragAction(key, activeChestState[key], 'out');
        }
    });

    // --- DRAG ACTION VALIDATOR ---
    const validateDragAction = (key, val, type) => {
        const currentQuest = quests[currentQuestIdx];

        if (currentQuest.mode === 'drag' && currentQuest.dragType === type && currentQuest.dragItem.key === key && currentQuest.dragItem.val === val) {
            // Correct Action
            playChime();
            
            // Execute state transformation
            activeChestState = JSON.parse(JSON.stringify(currentQuest.targetState));
            renderChestContents();

            // Run terminal sequence
            printTerminalSequence(currentQuest.terminalOutput);

            // Transition next quest
            setTimeout(() => {
                currentQuestIdx++;
                if (currentQuestIdx < quests.length) {
                    loadQuest(currentQuestIdx);
                } else {
                    triggerVictory();
                }
            }, currentQuest.terminalOutput.length * 450 + 1500);

        } else {
            // Incorrect drag action
            playBuzz();
            appendTerminalLine(`Warning: Action failed! The chest rejected the item change.`, "error");

            const hintBox = document.getElementById('hint-scroll-box');
            hintBox.style.display = 'block';
        }
    };

    // --- FALLBACK INTERACTIVE TAPS (Mobile) ---
    // Tap drop on Chest
    chestContainer.addEventListener('click', () => {
        // Toggle open if not in code mode
        const currentQuest = quests[currentQuestIdx];
        if (currentQuest.mode === 'drag') {
            const isOpen = chestContainer.classList.toggle('open');
            playCreak();
            if (isOpen) {
                appendTerminalLine("Vault chest opened. Active contents viewable.", "info");
            }
        }

        // Process mobile item deposit tap
        if (selectedShelfItemText) {
            const dragInfo = JSON.parse(selectedShelfItemText);
            validateDragAction(dragInfo.key, dragInfo.val, 'in');
            selectedShelfItemText = null;
            document.querySelectorAll('.item-token').forEach(c => c.classList.remove('selected'));
        }
    });

    // Tap drop on Portal
    portalContainer.addEventListener('click', () => {
        if (selectedVaultItemText) {
            validateDragAction(selectedVaultItemText, activeChestState[selectedVaultItemText], 'out');
            selectedVaultItemText = null;
            document.querySelectorAll('.vault-item').forEach(c => c.classList.remove('selected'));
        }
    });

    // --- VICTORY MODULE CONTROLS ---
    const triggerVictory = () => {
        playVictory();
        
        const progressFill = document.getElementById('progress-meter-fill');
        const progressText = document.getElementById('progress-percentage');
        progressFill.style.width = '100%';
        progressText.textContent = '100%';

        const victoryOverlay = document.getElementById('victory-overlay');
        if (victoryOverlay) {
            victoryOverlay.classList.add('active');
        }
    };

    const victoryClose = document.getElementById('victory-close');
    if (victoryClose) {
        victoryClose.addEventListener('click', () => {
            document.getElementById('victory-overlay').classList.remove('active');
            currentQuestIdx = 0;
            loadQuest(0);
        });
    }

    // --- INITIAL START ---
    loadQuest(0);
});
