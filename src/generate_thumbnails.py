from PIL import Image
import decord
import json

def pad_to_square(image):
    width, height = image.size
    if width == height:
        return image
    elif width > height:
        result = Image.new(image.mode, (width, width), (0, 0, 0))
        result.paste(image, (0, (width - height) // 2))
        return result
    else:
        result = Image.new(image.mode, (height, height), (0, 0, 0))
        result.paste(image, ((height - width) // 2, 0))
        return result


if __name__ == "__main__":
    video_data_raw_file = "video_data_raw.json"
    video_data_raw = json.load(open(video_data_raw_file))

    for category in video_data_raw.keys():
        category_data = video_data_raw[category]
        output_data = []
        for item in category_data:
            video_file = item['video_path']
            idx = item['idx']
            vr = decord.VideoReader(video_file, num_threads=1, ctx=decord.cpu(0))
            video_length = len(vr)
            middle_frame = vr[video_length//2]
            middle_frame = Image.fromarray(middle_frame.asnumpy())
            middle_frame = pad_to_square(middle_frame).resize((256, 256))
            output_file = f"../thumbnails/{idx}.jpg"
            middle_frame.save(output_file)
            print(f"Saved: {output_file}")
            output_data.append({
                "idx": 1,
                "video_url": item['video_url'],
                "descriptions": item['descriptions']
            })

    output_file = "video_data.json"
    json.dump(open(output_file, "w"))
