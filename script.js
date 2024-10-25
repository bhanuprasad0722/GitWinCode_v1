const cheatSheets = {
    git:`<table>
    <tr><th>#</th><th>Command</th><th>Description</th><th>Example</th></tr>
    <tr><td>1</td><td>git init</td><td>Initialize a new Git repository.</td><td>git init</td></tr>
    <tr><td>2</td><td>git clone</td><td>Clone an existing repository.</td><td>git clone https://github.com/user/repo.git</td></tr>
    <tr><td>3</td><td>git status</td><td>Show the working directory status.</td><td>git status</td></tr>
    <tr><td>4</td><td>git add</td><td>Add files to the staging area.</td><td>git add file.txt</td></tr>
    <tr><td>5</td><td>git commit</td><td>Commit changes to the repository.</td><td>git commit -m "Initial commit"</td></tr>
    <tr><td>6</td><td>git push</td><td>Push changes to the remote repository.</td><td>git push origin main</td></tr>
    <tr><td>7</td><td>git pull</td><td>Pull changes from the remote repository.</td><td>git pull origin main</td></tr>
    <tr><td>8</td><td>git branch</td><td>List, create, or delete branches.</td><td>git branch new-branch</td></tr>
    <tr><td>9</td><td>git checkout</td><td>Switch branches or restore files.</td><td>git checkout new-branch</td></tr>
    <tr><td>10</td><td>git merge</td><td>Merge branches together.</td><td>git merge feature-branch</td></tr>
    <tr><td>11</td><td>git log</td><td>Show commit history.</td><td>git log</td></tr>
    <tr><td>12</td><td>git reset</td><td>Reset the staging area or working directory.</td><td>git reset --hard HEAD</td></tr>
    <tr><td>13</td><td>git fetch</td><td>Download objects and refs from another repository.</td><td>git fetch origin</td></tr>
    <tr><td>14</td><td>git remote</td><td>Manage set of tracked repositories.</td><td>git remote -v</td></tr>
    <tr><td>15</td><td>git stash</td><td>Stash the changes in a dirty working directory.</td><td>git stash</td></tr>
    <tr><td>16</td><td>git stash pop</td><td>Apply the last stashed changes and remove from stash list.</td><td>git stash pop</td></tr>
    <tr><td>17</td><td>git rebase</td><td>Reapply commits on top of another base tip.</td><td>git rebase main</td></tr>
    <tr><td>18</td><td>git diff</td><td>Show changes between commits, branches, or working directory.</td><td>git diff HEAD</td></tr>
    <tr><td>19</td><td>git rm</td><td>Remove files from the working directory and from Git.</td><td>git rm file.txt</td></tr>
    <tr><td>20</td><td>git tag</td><td>Create, list, delete, or verify a tag object.</td><td>git tag v1.0</td></tr>
    <tr><td>21</td><td>git blame</td><td>Show what revision and author last modified each line of a file.</td><td>git blame file.txt</td></tr>
    <tr><td>22</td><td>git show</td><td>Show various types of objects, like a commit.</td><td>git show HEAD</td></tr>
    <tr><td>23</td><td>git config</td><td>Configure Git settings.</td><td>git config --global user.name "Your Name"</td></tr>
    <tr><td>24</td><td>git archive</td><td>Create an archive of files from a named tree.</td><td>git archive --format zip --output project.zip main</td></tr>
    <tr><td>25</td><td>git bisect</td><td>Use binary search to find the commit that introduced a bug.</td><td>git bisect start</td></tr>
    <tr><td>26</td><td>git cherry-pick</td><td>Apply the changes introduced by some existing commits.</td><td>git cherry-pick <commit_hash></td></tr>
    <tr><td>27</td><td>git revert</td><td>Create a new commit that undoes the changes made by a previous commit.</td><td>git revert <commit_hash></td></tr>
    <tr><td>28</td><td>git clean</td><td>Remove untracked files from the working directory.</td><td>git clean -f</td></tr>
    <tr><td>29</td><td>git diff --staged</td><td>Show changes between the staged changes and the last commit.</td><td>git diff --staged</td></tr>
    <tr><td>30</td><td>git reflog</td><td>Show the reference logs.</td><td>git reflog</td></tr>
    <tr><td>31</td><td>git show-branch</td><td>Show branches and their commits.</td><td>git show-branch</td></tr>
    <tr><td>32</td><td>git merge --abort</td><td>Abort the current merge process.</td><td>git merge --abort</td></tr>
    <tr><td>33</td><td>git config --list</td><td>List all Git configuration settings.</td><td>git config --list</td></tr>
    <tr><td>34</td><td>git submodule</td><td>Manage Git repositories nested inside another Git repository.</td><td>git submodule update --init</td></tr>
    <tr><td>35</td><td>git tag -d</td><td>Delete a tag.</td><td>git tag -d v1.0</td></tr>
    <tr><td>36</td><td>git push --tags</td><td>Push all local tags to the remote repository.</td><td>git push --tags</td></tr>
    <tr><td>37</td><td>git fetch --all</td><td>Fetch all branches from all remotes.</td><td>git fetch --all</td></tr>
    <tr><td>38</td><td>git push origin --delete</td><td>Delete a branch on the remote repository.</td><td>git push origin --delete branch-name</td></tr>
    <tr><td>39</td><td>git config user.email</td><td>Set the email for the current user.</td><td>git config --global user.email "you@example.com"</td></tr>
    <tr><td>40</td><td>git format-patch</td><td>Prepare patches for e-mail submission.</td><td>git format-patch origin/main</td></tr>
    <tr><td>41</td><td>git log --oneline</td><td>Show the commit history in a compact format.</td><td>git log --oneline</td></tr>
    <tr><td>42</td><td>git merge --no-ff</td><td>Merge with no fast-forwarding.</td><td>git merge --no-ff feature-branch</td></tr>
    <tr><td>43</td><td>git stash list</td><td>List all stashed changes.</td><td>git stash list</td></tr>
    <tr><td>44</td><td>git stash apply</td><td>Apply a stashed change without removing it from stash.</td><td>git stash apply</td></tr>
    <tr><td>45</td><td>git branch -d</td><td>Delete a branch.</td><td>git branch -d branch-name</td></tr>
    <tr><td>46</td><td>git log --graph</td><td>Show the commit history as a graph.</td><td>git log --graph</td></tr>
    <tr><td>47</td><td>git remote add</td><td>Add a new remote repository.</td><td>git remote add origin https://github.com/user/repo.git</td></tr>
    <tr><td>48</td><td>git checkout -b</td><td>Create a new branch and switch to it.</td><td>git checkout -b new-branch</td></tr>
    <tr><td>49</td><td>git reset HEAD</td><td>Unstage files from the staging area.</td><td>git reset HEAD file.txt</td></tr>
    <tr><td>50</td><td>git config --global alias.co</td><td>Create a shortcut for the checkout command.</td><td>git config --global alias.co checkout</td></tr>
    <tr><td>51</td><td>git config --global alias.br</td><td>Create a shortcut for the branch command.</td><td>git config --global alias.br branch</td></tr>
    <tr><td>52</td><td>git config --global alias.ci</td><td>Create a shortcut for the commit command.</td><td>git config --global alias.ci commit</td></tr>
</table>
`,
vscode:`<table>
    <tr><th>#</th><th>Command</th><th>Description</th></tr>
    <tr><td>1</td><td>Ctrl + Shift + P</td><td>Open Command Palette.</td></tr>
    <tr><td>2</td><td>Ctrl + P</td><td>Quick Open file.</td></tr>
    <tr><td>3</td><td>Ctrl + Shift + N</td><td>New window.</td></tr>
    <tr><td>4</td><td>Ctrl + ,</td><td>Open Settings.</td></tr>
    <tr><td>5</td><td>Ctrl + K Ctrl + S</td><td>Open Keyboard Shortcuts.</td></tr>
    <tr><td>6</td><td>Ctrl + Shift + O</td><td>Go to symbol in file.</td></tr>
    <tr><td>7</td><td>Ctrl + Shift + F</td><td>Search across files.</td></tr>
    <tr><td>8</td><td>Ctrl + </td><td>Toggle integrated terminal.</td></tr>
    <tr><td>9</td><td>Ctrl + B</td><td>Toggle sidebar visibility.</td></tr>
    <tr><td>10</td><td>Alt + Shift + F</td><td>Format document.</td></tr>
    <tr><td>11</td><td>Ctrl + /</td><td>Toggle line comment.</td></tr>
    <tr><td>12</td><td>Ctrl + Shift + C</td><td>Copy path of active file.</td></tr>
    <tr><td>13</td><td>Ctrl + K Z</td><td>Zen mode (fullscreen mode).</td></tr>
    <tr><td>14</td><td>Ctrl + K Ctrl + H</td><td>Open help documentation.</td></tr>
    <tr><td>15</td><td>F8</td><td>Go to next error or warning.</td></tr>
    <tr><td>16</td><td>Ctrl + Space</td><td>Trigger suggestion.</td></tr>
    <tr><td>17</td><td>Ctrl + K Ctrl + X</td><td>Show hover documentation.</td></tr>
    <tr><td>18</td><td>Shift + Alt + F</td><td>Format selected code.</td></tr>
    <tr><td>19</td><td>F1</td><td>Open command palette.</td></tr>
    <tr><td>20</td><td>Ctrl + Shift + D</td><td>Debug panel.</td></tr>
    <tr><td>21</td><td>Ctrl + Shift + M</td><td>Open problems panel.</td></tr>
    <tr><td>22</td><td>Ctrl + Shift + E</td><td>Explorer view.</td></tr>
    <tr><td>23</td><td>Ctrl + K Ctrl + U</td><td>Uppercase selected text.</td></tr>
    <tr><td>24</td><td>Ctrl + K Ctrl + L</td><td>Lowercase selected text.</td></tr>
    <tr><td>25</td><td>Ctrl + Shift + L</td><td>Select all occurrences of current selection.</td></tr>
    <tr><td>26</td><td>Ctrl + D</td><td>Add selection to next find match.</td></tr>
    <tr><td>27</td><td>Ctrl + K Ctrl + C</td><td>Comment selected lines.</td></tr>
    <tr><td>28</td><td>Ctrl + K Ctrl + U</td><td>Uncomment selected lines.</td></tr>
    <tr><td>29</td><td>Ctrl + Enter</td><td>Insert line below.</td></tr>
    <tr><td>30</td><td>Ctrl + Shift + Enter</td><td>Insert line above.</td></tr>
    <tr><td>31</td><td>Ctrl + Shift + K</td><td>Delete line.</td></tr>
    <tr><td>32</td><td>Alt + Up/Down</td><td>Move line up/down.</td></tr>
    <tr><td>33</td><td>Ctrl + Shift + \</td><td>Jump to matching bracket.</td></tr>
    <tr><td>34</td><td>Ctrl + Tab</td><td>Switch between open files.</td></tr>
    <tr><td>35</td><td>Ctrl + K Ctrl + R</td><td>Show reveal current file in explorer.</td></tr>
    <tr><td>36</td><td>Ctrl + K Ctrl + V</td><td>Open Markdown preview.</td></tr>
    <tr><td>37</td><td>F12</td><td>Go to definition.</td></tr>
    <tr><td>38</td><td>Ctrl + Shift + M</td><td>Open source control view.</td></tr>
    <tr><td>39</td><td>Ctrl + K Ctrl + P</td><td>Show references.</td></tr>
    <tr><td>40</td><td>Ctrl + Shift + V</td><td>Markdown preview to the side.</td></tr>
    <tr><td>41</td><td>Ctrl + K Ctrl + J</td><td>Insert snippet.</td></tr>
    <tr><td>42</td><td>Ctrl + K Ctrl + I</td><td>Show hover information.</td></tr>
    <tr><td>43</td><td>Ctrl + K Ctrl + F</td><td>Format selection.</td></tr>
    <tr><td>44</td><td>Ctrl + K Ctrl + O</td><td>Reveal file in operating system.</td></tr>
    <tr><td>45</td><td>Ctrl + K Ctrl + L</td><td>Clear terminal.</td></tr>
    <tr><td>46</td><td>Alt + Shift + N</td><td>Create new file.</td></tr>
    <tr><td>47</td><td>Ctrl + K Ctrl + Y</td><td>Show active editors.</td></tr>
    <tr><td>48</td><td>Ctrl + K Ctrl + T</td><td>Show theme picker.</td></tr>
    <tr><td>49</td><td>Ctrl + Shift + T</td><td>Reopen closed editor.</td></tr>
    <tr><td>50</td><td>Ctrl + K Ctrl + H</td><td>Show integrated help.</td></tr>
     <tr><td>51</td><td>Ctrl + K Ctrl + D</td><td>Open Developer Tools.</td></tr>
    <tr><td>52</td><td>Alt + Shift + F</td><td>Format entire document.</td></tr>
</table>`,
windows:`<table>
    <tr><th>#</th><th>Command</th><th>Description</th><th>Example</th></tr>
    <tr><td>1</td><td>cd</td><td>Change directory.</td><td>cd C:\Users</td></tr>
    <tr><td>2</td><td>dir</td><td>List files and directories.</td><td>dir</td></tr>
    <tr><td>3</td><td>mkdir</td><td>Create a new directory.</td><td>mkdir new-folder</td></tr>
    <tr><td>4</td><td>rmdir</td><td>Remove a directory.</td><td>rmdir /S /Q old-folder</td></tr>
    <tr><td>5</td><td>copy</td><td>Copy files from one location to another.</td><td>copy file.txt D:\Backup</td></tr>
    <tr><td>6</td><td>move</td><td>Move files from one location to another.</td><td>move file.txt D:\NewFolder</td></tr>
    <tr><td>7</td><td>del</td><td>Delete one or more files.</td><td>del file.txt</td></tr>
    <tr><td>8</td><td>cls</td><td>Clear the command prompt screen.</td><td>cls</td></tr>
    <tr><td>9</td><td>ipconfig</td><td>Display network configuration.</td><td>ipconfig</td></tr>
    <tr><td>10</td><td>ping</td><td>Test the connection to a remote host.</td><td>ping google.com</td></tr>
    <tr><td>11</td><td>tracert</td><td>Trace the route to a remote host.</td><td>tracert google.com</td></tr>
    <tr><td>12</td><td>netstat</td><td>Display network statistics and connections.</td><td>netstat -an</td></tr>
    <tr><td>13</td><td>shutdown</td><td>Shut down or restart the computer.</td><td>shutdown /r /t 0</td></tr>
    <tr><td>14</td><td>tasklist</td><td>Display a list of running processes.</td><td>tasklist</td></tr>
    <tr><td>15</td><td>taskkill</td><td>Terminate a process by PID.</td><td>taskkill /PID 1234 /F</td></tr>
    <tr><td>16</td><td>chkdsk</td><td>Check a disk for errors.</td><td>chkdsk C: /F</td></tr>
    <tr><td>17</td><td>format</td><td>Format a disk.</td><td>format D: /FS:NTFS</td></tr>
    <tr><td>18</td><td>systeminfo</td><td>Display detailed system information.</td><td>systeminfo</td></tr>
    <tr><td>19</td><td>sfc</td><td>Scan and repair corrupted system files.</td><td>sfc /scannow</td></tr>
    <tr><td>20</td><td>diskpart</td><td>Manage disk partitions.</td><td>diskpart</td></tr>
    <tr><td>21</td><td>gpupdate</td><td>Refresh Group Policy settings.</td><td>gpupdate /force</td></tr>
    <tr><td>22</td><td>wmic</td><td>Run Windows Management Instrumentation commands.</td><td>wmic cpu get name</td></tr>
    <tr><td>23</td><td>powercfg</td><td>Configure power settings.</td><td>powercfg /hibernate off</td></tr>
    <tr><td>24</td><td>echo</td><td>Display messages or turn command echoing on or off.</td><td>echo Hello, World!</td></tr>
    <tr><td>25</td><td>assoc</td><td>Display or modify file extension associations.</td><td>assoc .txt=txtfile</td></tr>
    <tr><td>26</td><td>attrib</td><td>Display or change file attributes.</td><td>attrib +r file.txt</td></tr>
    <tr><td>27</td><td>find</td><td>Search for a text string in a file.</td><td>find "error" log.txt</td></tr>
    <tr><td>28</td><td>xcopy</td><td>Copy files and directories, including subdirectories.</td><td>xcopy C:\folder D:\backup /s /e</td></tr>
    <tr><td>29</td><td>robocopy</td><td>Advanced copy tool for copying files and directories.</td><td>robocopy C:\folder D:\backup /mir</td></tr>
    <tr><td>30</td><td>fc</td><td>Compare two files and show differences.</td><td>fc file1.txt file2.txt</td></tr>
    <tr><td>31</td><td>path</td><td>Display or set the executable file search path.</td><td>path C:\Program Files\Java\bin</td></tr>
    <tr><td>32</td><td>set</td><td>Display, set, or remove environment variables.</td><td>set PATH=C:\Program Files</td></tr>
    <tr><td>33</td><td>pause</td><td>Pause the execution of a batch file.</td><td>pause</td></tr>
    <tr><td>34</td><td>title</td><td>Set the window title for the command prompt.</td><td>title My Command Window</td></tr>
    <tr><td>35</td><td>color</td><td>Change the text and background colors in the command prompt.</td><td>color 0A</td></tr>
    <tr><td>36</td><td>hostname</td><td>Display the computer’s name.</td><td>hostname</td></tr>
    <tr><td>37</td><td>ver</td><td>Display the operating system version.</td><td>ver</td></tr>
    <tr><td>38</td><td>tree</td><td>Display the directory structure graphically.</td><td>tree C:\</td></tr>
    <tr><td>39</td><td>fsutil</td><td>Display or configure file system properties.</td><td>fsutil fsinfo drives</td></tr>
    <tr><td>40</td><td>cipher</td><td>Encrypt or decrypt files and directories.</td><td>cipher /e C:\SensitiveData</td></tr>
    <tr><td>41</td><td>sc</td><td>Communicate with the service controller.</td><td>sc query</td></tr>
    <tr><td>42</td><td>net user</td><td>Manage user accounts.</td><td>net user John /add</td></tr>
    <tr><td>43</td><td>net use</td><td>Connect to a shared resource.</td><td>net use Z: \\server\share</td></tr>
    <tr><td>44</td><td>netstat</td><td>Display active network connections.</td><td>netstat -a</td></tr>
    <tr><td>45</td><td>exit</td><td>Close the command prompt window.</td><td>exit</td></tr>
</table>
`
};


// Function to display the cheat sheet
let currentTab = null;

// Function to show or toggle the cheat sheet
function showSheet(library) {
    const cheatsheetDiv = document.getElementById('cheatsheet');

    if (currentTab === library) {
        // If the same tab is clicked, close the cheat sheet
        cheatsheetDiv.innerHTML = '';
        currentTab = null; // Reset the current tab
    } else {
        // Load the selected cheat sheet
        cheatsheetDiv.innerHTML = cheatSheets[library];
        currentTab = library; // Update the current tab
    }
}

// Adding event listeners to the buttons
document.getElementById('gitTab').addEventListener('click', function() {
    showSheet('git');
});
document.getElementById('vsTab').addEventListener('click', function() {
    showSheet('vscode');
});
document.getElementById('windowsTab').addEventListener('click', function() {
    showSheet('windows');
});
// Download button functionality
document.getElementById('downloadBtn').addEventListener('click', function() {
    const blob = new Blob([document.getElementById('cheatsheet').innerHTML], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'cheatsheet.html';
    link.click();
});
