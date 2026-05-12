import csv

taxonomy_map = {}
# FOUND: 1-14
for i in range(1, 15):
    taxonomy_map[i] = "FOUND"
# RLIT: 15-83
for i in range(15, 84):
    taxonomy_map[i] = "RLIT"
# RINF: 84-121
for i in range(84, 122):
    taxonomy_map[i] = "RINF"
# WRITE: 122-168
for i in range(122, 169):
    taxonomy_map[i] = "WRITE"
# SPEAK: 169-187
for i in range(169, 188):
    taxonomy_map[i] = "SPEAK"
# LANG: 188-220
for i in range(188, 221):
    taxonomy_map[i] = "LANG"
# CRIT: 221-234
for i in range(221, 235):
    taxonomy_map[i] = "CRIT"
# MLIT: 235-242
for i in range(235, 243):
    taxonomy_map[i] = "MLIT"
# BIAS: 243-248
for i in range(243, 249):
    taxonomy_map[i] = "BIAS"
# SYS: 249-256
for i in range(249, 257):
    taxonomy_map[i] = "SYS"
# RES: 257-260
for i in range(257, 261):
    taxonomy_map[i] = "RES"
# CAP: 261-269
for i in range(261, 270):
    taxonomy_map[i] = "CAP"

rows = []
with open("learning-graph.csv", newline="") as f:
    reader = csv.DictReader(f)
    for row in reader:
        cid = int(row["ConceptID"])
        row["TaxonomyID"] = taxonomy_map.get(cid, "MISC")
        rows.append(row)

with open("learning-graph.csv", "w", newline="") as f:
    writer = csv.DictWriter(f, fieldnames=["ConceptID", "ConceptLabel", "Dependencies", "TaxonomyID"])
    writer.writeheader()
    writer.writerows(rows)

print(f"Done — added TaxonomyID to {len(rows)} rows.")
