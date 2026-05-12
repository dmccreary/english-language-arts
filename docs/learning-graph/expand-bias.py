"""Expand the BIAS taxonomy by inserting 12 new cognitive bias concepts
after concept 248 (Framing Effect), renumbering all subsequent concepts."""

import csv

# Old ID -> New ID for everything that was 249 and above
old_to_new = {}
for old_id in range(249, 270):
    old_to_new[old_id] = old_id + 12  # shift by 12

def remap_deps(dep_str):
    if not dep_str:
        return ""
    parts = dep_str.split("|")
    remapped = []
    for p in parts:
        pid = int(p)
        remapped.append(str(old_to_new.get(pid, pid)))
    return "|".join(remapped)

# Read existing rows
rows = []
with open("learning-graph.csv", newline="") as f:
    reader = csv.DictReader(f)
    for row in reader:
        rows.append(row)

# Remap ConceptIDs and Dependencies for rows 249+
updated_rows = []
for row in rows:
    cid = int(row["ConceptID"])
    if cid in old_to_new:
        row["ConceptID"] = str(old_to_new[cid])
    row["Dependencies"] = remap_deps(row["Dependencies"])
    updated_rows.append(row)

# New BIAS concepts to insert after old concept 248 (row index 247, 0-based)
new_bias = [
    (249, "Dunning-Kruger Effect",   "243",     "BIAS"),
    (250, "Bandwagon Effect",         "243",     "BIAS"),
    (251, "Sunk Cost Fallacy",        "243",     "BIAS"),
    (252, "Hindsight Bias",           "243",     "BIAS"),
    (253, "Attribution Bias",         "243",     "BIAS"),
    (254, "Survivorship Bias",        "243",     "BIAS"),
    (255, "Recency Bias",             "243|245", "BIAS"),
    (256, "Halo Effect",              "243",     "BIAS"),
    (257, "False Consensus Effect",   "243|247", "BIAS"),
    (258, "Negativity Bias",          "243",     "BIAS"),
    (259, "Motivated Reasoning",      "244|243", "BIAS"),
    (260, "Stereotyping",             "243|247", "BIAS"),
]

# Find insertion index: after concept 248
insert_after_idx = None
for i, row in enumerate(updated_rows):
    if int(row["ConceptID"]) == 248:
        insert_after_idx = i
        break

new_rows_to_insert = [
    {"ConceptID": str(cid), "ConceptLabel": label, "Dependencies": deps, "TaxonomyID": tax}
    for cid, label, deps, tax in new_bias
]

final_rows = (
    updated_rows[:insert_after_idx + 1]
    + new_rows_to_insert
    + updated_rows[insert_after_idx + 1:]
)

with open("learning-graph.csv", "w", newline="") as f:
    writer = csv.DictWriter(
        f, fieldnames=["ConceptID", "ConceptLabel", "Dependencies", "TaxonomyID"]
    )
    writer.writeheader()
    writer.writerows(final_rows)

print(f"Done. Total concepts: {len(final_rows)}")
print("New BIAS concepts inserted (249-260).")
print("Old SYS/RES/CAP concepts renumbered (261-281).")
