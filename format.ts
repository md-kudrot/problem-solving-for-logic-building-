/*
## OKLCH Validator

---

**Problem**
Given a string `s`, return `true` if it is a valid OKLCH color, `false` otherwise.

---

**Format**

```
oklch(L C H)
oklch(L C H / A)
```

---

**Constraints per component**

| Component | Range                      | Allowed formats           |
| --------- | -------------------------- | ------------------------- |
| L         | `[0, 1]` or `[0%, 100%]`   | number, `%`, `none`       |
| C         | `[0, 0.4]` or `[0%, 100%]` | number, `%`, `none`       |
| H         | `[0, 360]`                 | number (degrees), `none`  |
| A         | `[0, 1]` or `[0%, 100%]`   | number, `%` _(no `none`)_ |

---

**Rules**

1. Must start with `oklch(`and end with `)`
2. Exactly **one space** between L, C, H
3. Alpha preceded by `/` (space-slash-space)
4. No leading/trailing spaces inside parens
5. Numbers may have decimals, no leading zeros required
6. `none` is case-sensitive (lowercase only)

---

**Examples**

| Input                      | Output                    |
| -------------------------- | ------------------------- |
| `oklch(0.5 0.2 180)`       | `true`                    |
| `oklch(50% 50% 180)`       | `true`                    |
| `oklch(none 0.1 360)`
      | `true`                    |
| `oklch(1.1 0.2 180)`       | `false` — L > 1           |
| `oklch(0.5 -0.1 180)`      | `false` — C < 0           |
| `oklch(0.5 0.2 361)`       | `false` — H > 360
         |
| `oklch(0.5 0.2)`           | `false` — missing H       |
| `oklch(0.5 0.2 180/ 0.5)`  | `false` — bad `/` spacing |
| `OKLCH(0.5 0.2 180)`       | `false` — case sensitive  |
*/

// | `oklch(0.5 0.2 180 / 0.5)` | `true`                    |


function formats(test: string) {

    if (!test.startsWith("oklch")) {
        return false
    } else {
        test = test.split("oklch").pop() ?? ""
    }

    if (!test.startsWith("(") || !test.endsWith(")")) return false
    const array = test.slice(1, -1).split(" ")
    console.log(array)

    const [L, C, H, Slash, A] = array
}

const result = formats("oklch(0.5 -0.1 180)")
console.log(result)


// 1. Must start with `oklch(`and end with `)` ------------------>done
// 2. Exactly ** one space ** between L, C, H ------------------->done
// 3. Alpha preceded by`/`(space - slash - space)
// 4. No leading / trailing spaces inside parens
// 5. Numbers may have decimals, no leading zeros required
// 6. `none` is case -sensitive(lowercase only)


