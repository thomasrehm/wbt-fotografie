# wbt-fotografie
Web-based Training zum Thema Fotografie (Modul LL an der THM)

[thomasrehm.github.io/wbt-fotografie](http://thomasrehm.github.io/wbt-fotografie)

## Dependencies
Dieses WBT basiert auf einem eigenem [Fork](https://git.thm.de/trhm17/wbtframework) des [WBT Framework](https://git.thm.de/frpp96/wbtframework) der THM Friedberg sowie auf dem Kamera-Simulator [bethecamera](http://bethecamera.com/) von [SteveRidout](https://github.com/SteveRidout/bethecamera). Um die Bilder nach zu laden und so die Ladezeit des WBT zu beschleunigen wird außerdem das jQuery Plugin [unveil](http://luis-almeida.github.io/unveil/) von [Luis Almeida](https://github.com/luis-almeida/unveil) eingesetzt.

## Inhalt aus Spreadsheet
Die Inhalte für das WBT werden in einem [Google Spreadsheet](https://docs.google.com/spreadsheets/d/1U7imA8NCahaqeIT3jlz-3J-mTuRZyrYs1rUlTZsnO_M/edit?usp=sharing) gesammelt, ein simples Backend. Außerdem sind die eingesetzten Bilder ebenso in einem Google [Drive Ordner](https://drive.google.com/folderview?id=0B91vQ2ujyzQMfjJjNDRGb0tzeEJ3V0pHUnZXcTl4TldOU3hLekM5Yjd2dXlzdU5jQjRkZUE&usp=sharing) gehostet. Das WBT lädt vor der Initialisierung des WBT Frameworks die Inhalte aus dem [Spreadsheet im JSON Format](https://spreadsheets.google.com/feeds/list/1U7imA8NCahaqeIT3jlz-3J-mTuRZyrYs1rUlTZsnO_M/od6/public/values?alt=json-in-script), da dieses aus dem DOM die Navigation und alle anderen Framework-basierten Elemente generiert.

## Nutzung
Zur Nutzung einfach dieses Repository clonen. Um alle Submodule richtig zu laden, einfach per *git clone --recursive git@github.com:thomasrehm/wbt-fotografie.git*.

Alternativ normal clonen oder forken und danach *git submodule update* ausführen, um das Originalframework und weitere Dependencies zu laden.
