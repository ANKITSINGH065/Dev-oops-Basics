Managing user accounts on a Linux system involves several commands that allow you to create, modify, and delete user accounts. Here are some common user account management commands:

### Creating a User:

1. **useradd:**
   ```bash
   sudo useradd username
   ```
   This command creates a new user account. Replace "username" with the desired username.

2. **passwd:**
   ```bash
   sudo passwd username
   ```
   Set a password for the newly created user. Replace "username" with the username you just created.

### Modifying User Properties:

3. **usermod:**
   ```bash
   sudo usermod options username
   ```
   Modify user account properties. Common options include `-aG` to add the user to supplementary groups, `-L` to lock the account, `-U` to unlock the account, and more.

4. **chage:**
   ```bash
   sudo chage options username
   ```
   Set password expiration and other user account aging information. Common options include `-d` for the last password change date and `-E` for the account expiration date.

5. **passwd:**
   ```bash
   sudo passwd username
   ```
   Change a user's password.

### Deleting a User:

6. **userdel:**
   ```bash
   sudo userdel username
   ```
   Delete a user account without removing the user's home directory.

7. **userdel with -r:**
   ```bash
   sudo userdel -r username
   ```
   Delete a user account and remove the user's home directory.

### Displaying User Information:

8. **id:**
   ```bash
   id username
   ```
   Display user and group information for a specified username.

9. **finger:**
   ```bash
   finger username
   ```
   Display information about a user, including their login name, real name, terminal, login time, and more.

10. **who:**
    ```bash
    who
    ```
    Display information about users who are currently logged in.

11. **w:**
    ```bash
    w
    ```
    Display information about currently logged-in users and what they are doing.

These commands provide a basic set of tools for managing user accounts on a Linux system. Remember to use `sudo` before commands that require administrative privileges. For more details and options, you can refer to the respective manual pages by using the `man` command, like `man useradd` or `man userdel`.