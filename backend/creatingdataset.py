import numpy as np
import pandas as pd

# Define number of entries per profile
num_entries_per_profile = 50

# Set random seed for reproducibility
np.random.seed(42)

# Profiles for each career field
profiles = {
    "Software Development": [5, 4, 3, 4, 5, 3, 2, 2, 3, 5, 4, 3, 2, 2, 3],
    "Web Development": [3, 5, 4, 4, 2, 3, 3, 5, 2, 4, 5, 4, 2, 2, 3],
    "Mobile App Development": [3, 4, 5, 3, 2, 5, 3, 4, 5, 4, 3, 5, 2, 2, 4],
    "Data Science": [2, 3, 4, 5, 5, 2, 5, 3, 2, 4, 5, 4, 5, 4, 5],
    "Cybersecurity": [5, 3, 3, 4, 2, 5, 5, 5, 4, 2, 2, 3, 5, 5, 4],
    "Cloud Computing": [3, 2, 5, 3, 5, 4, 5, 4, 3, 5, 3, 2, 5, 4, 5],
    "Blockchain": [2, 5, 3, 5, 3, 5, 4, 5, 4, 3, 5, 2, 3, 4, 5],
    "DevOps": [4, 2, 3, 4, 5, 4, 5, 3, 5, 5, 3, 4, 5, 4, 3],
    "Artificial Intelligence": [4, 4, 5, 2, 5, 3, 4, 5, 4, 5, 5, 5, 3, 2, 5],
    "Network and Systems Administration": [5, 4, 2, 3, 2, 4, 3, 2, 5, 4, 3, 5, 5, 5, 3]
}

# Initialize an empty list to hold all the data frames
data_frames = []

# Populate the list with data frames for each profile
for career, responses in profiles.items():
    for _ in range(num_entries_per_profile):
        noisy_responses = [np.clip(x + np.random.randint(-1, 2), 1, 5) for x in responses]
        df = pd.DataFrame([noisy_responses + [career]], columns=[f'Q{i}' for i in range(1, 16)] + ['Career_Path'])
        data_frames.append(df)

# Concatenate all data frames into one
final_df = pd.concat(data_frames, ignore_index=True)

# Shuffle the DataFrame to randomize entries
final_df = final_df.sample(frac=1).reset_index(drop=True)

# Save to CSV
csv_file_path = 'Career_Path_Dataset.csv'
final_df.to_csv(csv_file_path, index=False)

print(f"Dataset generated and saved to {csv_file_path}")
