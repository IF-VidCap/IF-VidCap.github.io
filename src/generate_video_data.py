import json

if __name__ == "__main__":
    video_data_raw_file = "../private/video_data_raw.json"
    video_data_raw = json.load(open(video_data_raw_file))

    video_data = {}
    for category in video_data_raw.keys():
        category_data = video_data_raw[category]
        output_data = []
        for item in category_data:
            output_data.append({
                "idx": item['idx'],
                "descriptions": item['descriptions']
            })
        video_data[category] = output_data

    output_file = "../video_data.json"
    json.dump(video_data, open(output_file, "w"), indent = 4)