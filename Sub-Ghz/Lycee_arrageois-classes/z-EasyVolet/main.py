from colorama import init, Fore
import time
import os

# var :
id = ""
nb = ""
name = ""
lower_name = ""
Voleyy = "1"
volet = int(Voleyy)

# static var : 
v = "V-"

down = "_down"
stop = "_stop"
up = "_up"

txt = ".txt"
sub = ".sub"

slash = "/"

up_start = "UP: /ext/subghz/lycee/"
up_end = "_up.sub"
down_start = "DOWN: /ext/subghz/lycee/"
down_end = "_down.sub"
ok_start = "OK: /ext/subghz/lycee/"
ok_end = "_stop.sub"

label_up = "ULABEL: Up"
label_down = "DLABEL: Down"
label_ok = "OKLABEL: Stop"
label_all = f"{label_up}\n{label_down}\n{label_ok}"

spacebetween = " "

file_type = "Filetype: Flipper SubGhz Key File"
version = "Version: 1"
frequency = "Frequency: 433920000"
preset = "Preset: FuriHalSubGhzPresetOok650Async"
protocol = "Protocol: CAME"
bit = "Bit: 24"
start_key = "Key: 00 00 00 00 00 "
all_parameters = f"{file_type}\n{version}\n{frequency}\n{preset}\n{protocol}\n{bit}\n{start_key}"

up_letter = "B"
stop_letter = "A"
down_letter = "9"

script_localisation = os.path.dirname(os.path.realpath(__file__))
output_localisation = os.path.join(script_localisation, "Output")
remote_localisation = os.path.join(output_localisation, "Remotes")
files_localisation = os.path.join(output_localisation, "Files")


init()


print(Fore.RED + "Merci d'entrer les valeurs en MAJUSCULE")
print()
print()

print(Fore.WHITE + "Entrez le nom de la salle : ")
name = input(Fore.WHITE + "> ")
lower_name = name.lower()
print()

print(Fore.WHITE + "Entrez votre ID de volet : ")
id = input(Fore.WHITE + "> ")
print()

while nb == "":
    try:
        print(Fore.WHITE + "Entrez le nombre de volet(s) : ")
        nb = int(input(Fore.WHITE + "> "))

    except ValueError:
        print(Fore.RED + "Error : bad input")
        print(" ")

print(" ")
print(Fore.GREEN + "Generating Files...")
time.sleep(0.1)

folder_loc_remote = os.path.join(remote_localisation, name)
os.makedirs(folder_loc_remote, exist_ok=True)


for i in range (nb):
    V_Remote = f"{v}{volet}{txt}"
    remote_loc = os.path.join(folder_loc_remote, V_Remote)
    content = f"{up_start}{lower_name}{slash}{volet}{up_end}\n{down_start}{lower_name}{slash}{volet}{down_end}\n{ok_start}{lower_name}{slash}{volet}{ok_end}\n{label_all}"

    with open(remote_loc, 'w') as f:
        f.write(content)

    volet = volet + 1
volet = 1

print(Fore.GREEN + "remote(s) : DONE")

folder_loc_file = os.path.join(files_localisation, lower_name)
os.makedirs(folder_loc_file, exist_ok=True)

for i in range (nb):
        
        if volet == 1:
            action = "E"
        if volet == 2:
            action = "D"
        if volet == 3:
            action = "C"
        if volet == 4:
            action = "B"


        V_File = f"{volet}{up}{sub}"
        file_loc = os.path.join(folder_loc_file, V_File)

        content = f"{all_parameters}{id}{spacebetween}{action}{up_letter}"
        with open(file_loc, 'w') as f:
            f.write(content)


        V_File = f"{volet}{stop}{sub}"
        file_loc = os.path.join(folder_loc_file, V_File)

        content = f"{all_parameters}{id}{spacebetween}{action}{stop_letter}"
        with open(file_loc, 'w') as f:
            f.write(content)


        V_File = f"{volet}{down}{sub}"
        file_loc = os.path.join(folder_loc_file, V_File)

        content = f"{all_parameters}{id}{spacebetween}{action}{down_letter}"
        with open(file_loc, 'w') as f:
            f.write(content)

        print(Fore.GREEN + f"File(s) : {volet}/{nb} DONE")

        volet = volet + 1

volet = 1

print(" ")
print(Fore.GREEN + "Created All Files and Remotes SUCCESSFULLY")
time.sleep(5)