# PAN-Validator
This Javascript function will validate Indian Income Tax Number (PAN)


Try at JS Fiddle : https://st.riyas.pro/pan-validator-fiddle

The PAN (or PAN number) is a ten-character long alpha-numeric unique identifier.

The PAN' structure is as follows: Fourth character [P — Individual or Person ] Example: AAAPZ1234C

The first five characters are letters (in uppercase by default), followed by four numerals, and the last (tenth) character is a letter. <br>
The first three characters of the code are three letters forming a sequence of alphabets letters from AAA to ZZZ<br>
The fourth character identifies the type of holder of the card. Each holder type is uniquely defined by a letter from the list below:<br><br>
A — Association of persons (AOP)<br>
B — Body of individuals (BOI)<br>
C — Company<br>
F — Firm<br>
G — Government<br>
H — HUF [Hindu joint family|Hindu undivided family]<br>
L — Local authority<br>
J — Artificial juridical person<br>
P — Individual or Person<br>
T — Trust (AOP)<br><br>
The fifth character of the PAN is the first character of either:<br>
of the surname or last name of the person, in the case of a "personal" PAN card, where the fourth character is "P" or<br>
of the name of the entity, trust, society, or organisation in the case of a company/HUF/firm/AOP/trust/BOI/local authority/artificial judicial person/government, where the fourth character is "C", "H", "F", "A", "T", "B", "L", "J", "G".<br>
The last (tenth) character is an alphabetic digit used as a check-sum to verify the validity of that current code.<br>
