"""Insert 14 AI-and-Writing concepts (282-295) before the RES/CAP block,
renumber old concepts 269-281 → 296-308, fix dependency references."""

import csv

# Old ID -> new ID for concepts that were 269-281
old_to_new = {old: old + 27 for old in range(269, 282)}

def remap_deps(dep_str):
    if not dep_str:
        return ""
    return "|".join(str(old_to_new.get(int(p), int(p))) for p in dep_str.split("|"))

rows = []
with open("learning-graph.csv", newline="") as f:
    reader = csv.DictReader(f)
    for row in reader:
        rows.append(row)

# Remap rows whose ConceptID or deps reference the shifted IDs
updated = []
for row in rows:
    cid = int(row["ConceptID"])
    if cid in old_to_new:
        row["ConceptID"] = str(old_to_new[cid])
    row["Dependencies"] = remap_deps(row["Dependencies"])
    updated.append(row)

# New AIWR concepts inserted after concept 281 (old last concept, now 308)
# But we insert them with IDs 282-295 BEFORE the RES block (new 296+)
new_aiwr = [
    (282, "AI Impact on Writing",          "1|127",         "AIWR"),
    (283, "AI Writing Tools Overview",     "282",           "AIWR"),
    (284, "Cowriting with AI",             "283|127",       "AIWR"),
    (285, "AI for Brainstorming",          "284|128",       "AIWR"),
    (286, "AI Feedback on Writing",        "284|130",       "AIWR"),
    (287, "AI for Outlining and Org",      "285|135",       "AIWR"),
    (288, "Prompt Engineering for Writing","283|128",       "AIWR"),
    (289, "Ethical AI Use in Academics",   "282|221",       "AIWR"),
    (290, "Academic Dishonesty with AI",   "289|153",       "AIWR"),
    (291, "AI-Generated Text Detection",   "290|238",       "AIWR"),
    (292, "AI Disclosure and Citation",    "289|154",       "AIWR"),
    (293, "AI Limitations in Writing",     "283|221",       "AIWR"),
    (294, "Preserving Voice with AI",      "284|63",        "AIWR"),
    (295, "Critical Eval of AI Output",    "283|221|238",   "AIWR"),
]

new_rows = [
    {"ConceptID": str(cid), "ConceptLabel": label,
     "Dependencies": deps, "TaxonomyID": tax}
    for cid, label, deps, tax in new_aiwr
]

# Find insertion point: after old concept 268 (SYS last), now still 268
# The first RES concept is now 296
insert_after_idx = None
for i, row in enumerate(updated):
    if int(row["ConceptID"]) == 268:
        insert_after_idx = i
        break

final = (
    updated[:insert_after_idx + 1]
    + new_rows
    + updated[insert_after_idx + 1:]
)

with open("learning-graph.csv", "w", newline="") as f:
    writer = csv.DictWriter(
        f, fieldnames=["ConceptID", "ConceptLabel", "Dependencies", "TaxonomyID"])
    writer.writeheader()
    writer.writerows(final)

print(f"Done. Total concepts: {len(final)}")
print("AIWR concepts inserted: 282-295")
print("RES/CAP renumbered: 296-308")
