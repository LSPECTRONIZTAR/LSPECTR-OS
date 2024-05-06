# Contributing Projects

If you've developed a project using TurboWarp or PenguinMod that you think would be a great addition to playables in LSPECTR-OS, we welcome your contributions! Here’s how you can package your project and submit it for integration into LSPECTR-OS.

> [!IMPORTANT]
> It is crucial to ask permission to propose projects that weren't made by you. Go to the first subsection of [this section](https://github.com/LSPECTRONIZTAR/lspectr-os/blob/main/CONTRIBUTING.md#extra-sections) to know how to ask permission.

## 1. Packaging your project

To ensure that your project can be integrated smoothly into LSPECTR-OS, you'll need to first package it appropriately using the TurboWarp packager. It is assumed you don't know how to package your project to work in LSPECTR-OS. If you do... read it anyway just to be sure you're not doing anything wrong.

<details>
  <summary>How to package your project</summary>
  <p>

### Setting up the packager

Follow these steps based on the type of project you are working with:

**Scratch Projects (`.sb3` files):**
1. Locate the Scratch project you wish to package.
2. Copy the project link to your clipboard. Alternatively, you can open the Scratch editor for your project, go to 'File' > 'Save to your computer', and wait for the `.sb3` file to download before following the TurboWarp instructions.
3. Visit the [TurboWarp Packager](https://packager.turbowarp.org).
4. Select 'Scratch Project ID or URL', paste the copied link into the input box, and click 'Load Project'.

**TurboWarp Projects (`.sb3` files):**
1. Ensure your project file (`.sb3`) is saved on your computer.
2. Navigate to the [TurboWarp Packager](https://packager.turbowarp.org).
3. Click 'File', choose the `.sb3` file you wish to package, and click 'Load Project'.

**PenguinMod Projects (`.pmp` files):**

As aforementioned, PenguinMod is a mod of TurboWarp, so you basically just have to follow the TurboWarp project instructions, but instead, you want to go to the [PenguinMod Packager](https://studio.penguinmod.com/PenguinMod-Packager/) and load `.pmp` files instead of `.sb3` files.

### Packaging the project

Once your project is loaded in the appropriate packager, find the 'Custom Stage Size' prompt in the Runtime Options section and change it to 640 x 360 if your project supports widescreen. You may then configure the rest of the packager settings as needed to optimize performance and compatibility as you please.

After that, scroll down to the Environment section. The option should be automatically set to 'Plain HTML (standalone, works anywhere)', however, if your project file is larger than 19 MB, it is not recommended to use this option, as the resulting file size after packaging will add at least 10 MB (depending on how many assets your game uses) to the file size and become too big to be uploaded to GitHub.

Instead, click on the 'Other environments' dropdown and click on 'Zip, combine assets into single file (not recommended)'. This will produce a `.zip` file that is only like 1 MB bigger than the project file that will still fit in GitHub. Then click 'Package' and wait for the resulting `.zip` (or `.html`) file to download.

Congratulations! You have successfully packaged your project!
  </p>
</details>

---

After you've packaged your project, don't close the tab yet. Click 'Export Settings' to download the .json that contains the current packacger settings for the project. This will serve as a backup in case your project needs to be updated and you need to use the same packager settings, plus you will need it later.

## 2. Setting up your game folder

After you have downloaded your packaged project file, locate it in your device's file explorer. If it is an `.html` file, rename it to index.html and store it in a new folder with the original file name (without the `.html` extension). If it is a `.zip` file, extract the file and leave it at that.

<details>
  <summary>How to extract your file</summary>
  <p>
    
### How to extract your file

**Windows:**
1. **Locate `.zip` File**: Open File Explorer and navigate to the folder where the `.zip` file is saved. You can use the search bar or browse through folders.
2. **Extract `.zip` File**: Right-click on the `.zip` file, then select "Extract All..." from the context menu. Follow the prompts to choose the extraction destination and click "Extract" to unzip the files.

**macOS:**
1. **Locate `.zip` File**: Open Finder and go to the folder containing the `.zip` file. You can use Spotlight search or navigate manually.
2. **Extract `.zip` File**: Double-click the `.zip` file to automatically extract its contents into a new folder with the same name as the `.zip` file. You can also drag the `.zip` file to a specific location to extract it there.

**Linux (Ubuntu, for example):**
1. **Locate `.zip` File**: Use the File Manager (e.g., Nautilus) to navigate to the folder where the `.zip` file is located.
2. **Extract `.zip` File**: Right-click on the `.zip` file and choose "Extract Here" to extract the files in the same location. You can also select "Extract to..." to specify a different extraction directory.

**Android:**
1. **Locate `.zip` File**: Open the File Manager app on your Android device.
2. **Extract `.zip` File**:
   - If the File Manager supports it, you can tap on the `.zip` file to view its contents and select "Extract" or "Unzip."
   - Alternatively, long-press the `.zip` file to bring up a menu, then choose the "Extract" or "Unzip" option.

**iOS (iPhone/iPad):**
1. **Locate `.zip` File**: Use a file management app like Files or Documents by Readdle to access the `.zip` file.
2. **Extract `.zip` File**:
   - Some file management apps on iOS allow you to tap on the `.zip` file and select "Extract" or "Unzip" to extract its contents.
   - Alternatively, you may need to open the `.zip` file in a compatible app (e.g., a file viewer or unzip app) to extract its contents.

These steps should help users across different devices and operating systems to locate and extract `.zip` files effectively.
  </p>
</details>

> [!CAUTION]
> If you don't see the `.html` extension at the end of the file name after clicking rename, make sure to rename it to `index` and not `index.html`. This ensures proper functionality within LSPECTR-OS. On iOS, you can click the Options button in Flies (the circled outline surrounding the three dots) and then toggle on 'Show All Extensions' under the 'View Options' dropdown.

Now, find the `.json` file for the packager settings that you downloaded earlier (if you can't find it, search for it, its name should be `turbowarp/penguinmod-packager-settings.json`) and move it into the folder you just created.

You must also set a cover image for your game called `cover-art.png`.

For LSPECTR-OS to handle your game or project correctly, it's essential to include a `details.json` file in the game folder. This file should contain key information about your project in a structured format.

<details>
  <summary>How to make your details.json file</summary>
  <p>
    
Below is the structure and an example of what the `details.json` file should look like:

### Structure of `details.json`

The `details.json` file should include the following properties:

- **name**: The name of your game or project.
- **description**: A brief description of the game or project.
- **author**: The name of the individual or team who developed the game or project.
- **version**: The current version of the game or project.

### Example `details.json`

```json
{
  "name": "Appel",
  "description": "Help Appel to navigate through each level before finally facing Micro Manager and restoring peace to the world.",
  "author": "griffpatch",
  "version": "1.4.0"
}
```
Source: [Appel by @griffpatch](https://scratch.mit.edu/projects/60917032/)

### Instructions for creating the `details.json` file

**Windows:**
1. Open your favorite text editor (such as Notepad, Visual Studio Code, or any other editor that supports plain text).
2. Copy the structure provided above and fill in the details corresponding to your project.
3. Save the file with the filename `details.json` inside the game folder where your `index.html` or the extracted game files reside.

**Other:**
1. Skip this step and continue following the instructions until you've successfully forked the repository and imported your game folder. Then come back to this step, go to the `games/your-game-name` directory create your `details.json` by going to 'Add file' > 'Create file'.
2. Copy the structure provided above and fill in the details corresponding to your project.

By following these guidelines, contributors can ensure that their submissions are complete and that LSPECTR-OS can properly display and manage the games or projects included.
  </p>
</details>

### Full list of required files to include in your folder

| Filename | Description | Requirements |
| ---- | ----------- | ------------ |
| `cover-art.png` | The square image that shows in the game library for easy identification. | Must have a 1:1 ratio (square), must be .png |
| `background-image.png` | The background that shows while the cursor is hovering over your game in the game library and when the game is loading. You could even use a background image from the project itself. | Must have a 16:9 ratio (widescreen), must be .png |
| `details.json` | The details of the game. | Must be any file format that supports plain text, must be in valid JSON format |

### Full list of optional files to include in your folder

| Filename | Description | Requirements |
| ---- | ----------- | ------------ |
| `background-music.mp3` | The background music that plays while the cursor is hovering over your game in the game library. | Must be .mp3, recommended to use music that loops seamlessly |
| `video-preview.mp4` | The video that plays in the background while the cursor is hovering over your game in the game library (it doesn't loop). Think of it as the game trailer. | Must be .mp4 |

> [!TIP]
> If the files you want to use aren't in the required file format, trying using a file converting tool, such as [CloudConvert](https://cloudconvert.com).

> [!WARNING]
> All files in your game folder must be less than 25 MB (less than 25.9 on iOS) in order to fit into Github, otherwise it will tell you to "try again with a file smaller than 25 MB." To evade this problem, you can either:
> - Attempt to add the folder using Terminal.
> - Use an online file compressing tool.
> - If `index.html` or `assets.zip` are the large files, then go to the second subsection of [this section](https://github.com/LSPECTRONIZTAR/lspectr-os/blob/main/CONTRIBUTING.md#extra-sections) for a possible workaround for this limitation *before* attempting to fork this repository. This option is less complicated and more guaranteed to work properly (Spoiler alert: It has something to do with moving sprites to a different location. 😉)

---

Once you are finished creating and moving each file to your game folder, ensuring that every image is renamed to `cover-art.png` or `background-image.png` and that every other file is renamed to the appropriate file name, you may then proceed to the exciting part!

## 3. Proposing your game to be added

> [!NOTE]
> There may or may not be a way to do this on Android as intended. You might want to consider transferring your game folder to another device via Quick Share, AirDrop, OneDrive, etc.
> 
> It is also recommended to continue the process in a new window either in splitscreen or on a device (that supports multiple onscreen windows as well as dragging folders) so that you can continue reading as you follow the instructions.

Now that your game folder has successfully been set up, it is now time to propose it to be added to LSPECTR-OS. You can propose to add a game to LSPECTR-OS the way you propose custom extensions to be added to the `TurboWarp/extensions` repository — by forking this repository and submitting a pull request.

### Forking the repository

Simply go to the main page of the repository, and click on 'Fork.' Forking a repository copies it and makes it possible to submit pull requests. You can name it whatever you like. If you've already forked this repository, simply go to it.
![IMG_0824](https://github.com/LSPECTRONIZTAR/lspectr-os/assets/85520933/9c84ac52-3417-4b70-8b92-1260cf9d5ba4)

### Adding your game

In your new fork of the repository, go to the `games` directory. Then —

- **iOS:** Open the Files app, click the three dots at the top center of the screen and click 'Slide Over.' Then after it redirects you to the homescreen, go to Safari or whatever browser you use and switch to the repository window.
- **Computers (Windows, macOS, Chromebook):** Open the File Explorer a new window.

— and drag the entire game folder from the Files app into the drag prompt in the GitHub window. Then click 'Commit changes'.

> [!CAUTION]
> DO NOT upload the files individually, because then you will have to rename each file to add `your-game-name/` to the beginning, which might mess up image/audio files (trust me, it's happened to me).

![IMG_0828](https://github.com/LSPECTRONIZTAR/lspectr-os/assets/85520933/2ded618e-3b2c-4b10-aa81-7a4595557fd9)

### Submitting a pull request

Finally, go to 'Pull requests' in your forked repository page, and click 'New pull request'. It should be comparing the `main` branch from `LSPECTRONIZTAR/lspectr-os` (the original repository) to the `main` branch to your forked repository. Click 'Create pull request.' When creating the pull request, make sure the title contains the title of the project as well as the author.

Example: `Appel by griffpatch`
![IMG_0831](https://github.com/LSPECTRONIZTAR/lspectr-os/assets/85520933/7f43215e-bad0-409d-ad03-16f9b0e3fbcf)

---

And that's it for proposing your project for now. There are some extra sections for troubleshooting and other, so if you need help, be sure to read them.

---

## Extra Sections

<details>
  <summary>Click to see extra sections</summary>
  <p>

### 1. Proposing projects you did not make

If you come across a Scratch, TurboWarp, or PenguinMod project created by someone else that you think would be a fantastic addition to LSPECTR-OS, you can propose it for inclusion. However, it's crucial to respect the original creator's rights and wishes.

Before you submit someone else's project to LSPECTR-OS, you must obtain their explicit permission. This ensures respect for the intellectual property and effort of the original creator.

Make sure you know who the original creator of the project is. This information is typically available on the project page or within the project's documentation. Your best bet is to find their Scratch profile (if they have one) and comment your request there.

When writing your message, be clear, polite, and professional. Explain who you are, your intentions, and why you believe their project would be a great fit for LSPECTR-OS. Here is a sample message you could use or modify:

> Hello, `creator name`! My name is `proposer name`, and I would like to respectfully ask for your permission to propose your project, `name of project you want to be featured`, to be featured in LSPECTR-OS, an application designed by @LSPECTRONIZTAR that allows you to play games and do much more. Of course, all credit will be given to you as the original creator, and links to your original project page will be prominently displayed. Is it okay for me to propose your project?

After getting permission, take a screenshot of the message that gave you consent and put it in the description when creating your pull request so I can confirm tha you got permission.

Always remember that the creative work of others is protected by copyleft. By obtaining permission, you respect and support the creators and the community at large.

> I still recommend *not* trying to propose other people's projects just in case...

### 2. Reducing the project size

> In the intricate world of digital creation, particularly within projects developed using Scratch's versatile `.sb3` format, the efficiency and manageability of a project file can often hinge on seemingly small but significantly impactful elements. As creators and developers, it is crucial to understand that the size of an `.sb3` file is not merely a static measurement, but rather a dynamic aggregate influenced by two major components: the `project.json` file, which encapsulates the complexity and quantity of code blocks utilized, and the plethora and size of associated assets, including sprite files. This understanding is not just academic—it is a practical insight that can lead to more streamlined and efficient project management. As we venture deeper into the nuances of file optimization, let us explore the transformative strategy of exporting sprite files, thereby reducing the overall file size and enhancing the operational functionality of our projects on platforms like GitHub.

If English high school teachers wanted us to write an introductory paragraph that sets the stage for discussing the impact of sprite files and assets on the size of an `.sb3` file, I can assure you that would be what they expect us to write. Anyway... have you ever wanted to reduce your project file size, but didn't have access to some sort of mysterious Lazy Loading method? When I was setting up this repository, I thought of packaging [Right Side City](https://scratch.mit.edu/projects/784182808/) and importing the `.html` into GitHub for testing. It's a random platformer inspired by Splatoon 2: Octo Expansion that I had made out of pure boredom that ended up winning second place in a famous Scratcher's contest, but I'm sure you don't even care so let's just forget about that.

Anyway, the `.sb3` for Right Side City was well over 150 MB, and we all know that 150 is literally 25 (the maximum file size GitHub allows you to upload) *sextupled* (I'm talking about sextupled as in multiplied by six, seriously, who even named it like that and why?). Of course, it wouldn't fit after packaging. So I came up with a solution that I think might help you guys out as well. But it requires owning your own GitHub account *and* creating your own GitHub repositories. If at any time should you feel uncomfortable trying this solution, just remember no one forced you to do it. 😇

---

The first thing you should do is [WORK IN PROGRESS]
  </p>
</details>

## Congratulations!

You have successfully proposed your project to be featured in LSPECTR-OS! Your contribution is invaluable to the growth and diversity of the applications and games available within this platform. Here’s what happens next:

### Review Process

I check pull requests almost every day when possible to ensure timely responses. Here’s what to expect during the review process:

1. **Initial Review**:
   - I will perform an initial review of the pull request to ensure that it meets the basic requirements — correct file placement, proper formatting of the `details.json` file, and overall compatibility with LSPECTR-OS.
   
2. **Testing**:
   - The project will be tested to ensure that it functions correctly within the LSPECTR-OS environment. This includes loading the game, running it, and checking for any critical errors that might affect performance or user experience.

3. **Feedback**:
   - If there are any issues or further modifications needed, feedback will be provided through the GitHub comments section of your pull request. You will have the opportunity to make any necessary adjustments and update the pull request.

4. **Approval and Merge**:
   - Once everything is in order, your pull request will be approved and merged into the main LSPECTR-OS project. Your game or project will then become part of LSPECTR-OS, accessible to all users.

### Keeping You Updated

- **Notifications**: Make sure to watch the repository and keep notifications on for updates on your pull request.
- **Communication**: Feel free to reach out or comment on your pull request if you have questions or need clarification on the feedback.

## Thank You for Your Contribution!

Your effort to enhance LSPECTR-OS and the community's experience is greatly appreciated. We look forward to seeing your creative projects and are excited to feature them in LSPECTR-OS.
