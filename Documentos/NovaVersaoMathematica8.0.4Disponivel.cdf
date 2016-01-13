(* Content-type: application/vnd.wolfram.cdf.text *)

(*** Wolfram CDF File ***)
(* http://www.wolfram.com/cdf *)

(* CreatedBy='Mathematica 8.0' *)

(*************************************************************************)
(*                                                                       *)
(*  The Mathematica License under which this file was created prohibits  *)
(*  restricting third parties in receipt of this file from republishing  *)
(*  or redistributing it by any means, including but not limited to      *)
(*  rights management or terms of use, without the express consent of    *)
(*  Wolfram Research, Inc.                                               *)
(*                                                                       *)
(*************************************************************************)

(*CacheID: 234*)
(* Internal cache information:
NotebookFileLineBreakTest
NotebookFileLineBreakTest
NotebookDataPosition[       835,         17]
NotebookDataLength[     78095,       1484]
NotebookOptionsPosition[     77030,       1434]
NotebookOutlinePosition[     77850,       1464]
CellTagsIndexPosition[     77807,       1461]
WindowFrame->Normal*)

(* Beginning of Notebook Content *)
Notebook[{

Cell[CellGroupData[{
Cell[BoxData[{
 RowBox[{
  RowBox[{"tamanho", "=", "65"}], ";"}], "\[IndentingNewLine]", 
 RowBox[{
  RowBox[{"TamanhoHeader", "=", "75"}], ";"}], "\[IndentingNewLine]", 
 RowBox[{"Grid", "[", "\[IndentingNewLine]", 
  RowBox[{
   RowBox[{"{", "\[IndentingNewLine]", 
    RowBox[{
     RowBox[{"{", "\[IndentingNewLine]", 
      RowBox[{
       RowBox[{"Hyperlink", "[", "\[IndentingNewLine]", 
        RowBox[{
         RowBox[{"Framed", "[", 
          RowBox[{"Style", "[", 
           RowBox[{"\"\<www.mathematica.com.br\>\"", ",", 
            RowBox[{"{", "Bold", "}"}], ",", "32"}], "]"}], "]"}], ",", 
         "\"\<http://www.mathematica.com.br\>\"", ",", "\[IndentingNewLine]", 
         
         RowBox[{"ActiveStyle", "\[Rule]", "Red"}]}], "\[IndentingNewLine]", 
        "]"}], ",", "SpanFromLeft"}], "\[IndentingNewLine]", "}"}], ",", 
     "\[IndentingNewLine]", 
     RowBox[{"{", "\[IndentingNewLine]", "}"}], ",", "\[IndentingNewLine]", 
     RowBox[{"{", "\[IndentingNewLine]", 
      RowBox[{
       RowBox[{"Grid", "[", "\[IndentingNewLine]", 
        RowBox[{
         RowBox[{"{", "\[IndentingNewLine]", 
          RowBox[{"{", "\[IndentingNewLine]", 
           RowBox[{"(*", 
            RowBox[{"*", " ", "Black"}], " ", "**)"}], "\[IndentingNewLine]", 
           
           RowBox[{
            RowBox[{"Graphics", "[", 
             RowBox[{
              RowBox[{"{", 
               RowBox[{"Green", ",", 
                RowBox[{"Rectangle", "[", "]"}]}], "}"}], ",", 
              RowBox[{"ImageSize", "\[Rule]", "tamanho"}]}], "]"}], ",", 
            "\[IndentingNewLine]", 
            RowBox[{"Graphics", "[", 
             RowBox[{
              RowBox[{"{", 
               RowBox[{"Black", ",", 
                RowBox[{"Rectangle", "[", "]"}]}], "}"}], ",", 
              RowBox[{"ImageSize", "\[Rule]", "tamanho"}]}], "]"}], ",", 
            "\[IndentingNewLine]", 
            RowBox[{"Graphics", "[", 
             RowBox[{
              RowBox[{"{", 
               RowBox[{"Black", ",", 
                RowBox[{"Rectangle", "[", "]"}]}], "}"}], ",", 
              RowBox[{"ImageSize", "\[Rule]", "tamanho"}]}], "]"}]}], 
           "\[IndentingNewLine]", "}"}], "\[IndentingNewLine]", "}"}], ",", 
         "\[IndentingNewLine]", 
         RowBox[{"Frame", "\[Rule]", "All"}], ",", "\[IndentingNewLine]", 
         RowBox[{"FrameStyle", "\[Rule]", 
          RowBox[{"Directive", "[", 
           RowBox[{"Thickness", "[", "10", "]"}], "]"}]}], ",", 
         "\[IndentingNewLine]", 
         RowBox[{"Alignment", "\[Rule]", "Center"}], ",", 
         "\[IndentingNewLine]", 
         RowBox[{"Background", "\[Rule]", "Black"}], ",", 
         "\[IndentingNewLine]", 
         RowBox[{"Spacings", "\[Rule]", 
          RowBox[{"{", 
           RowBox[{"0", ",", "0"}], "}"}]}]}], "\[IndentingNewLine]", "]"}], 
       ",", "\[IndentingNewLine]", "\"\<        \>\"", "\[IndentingNewLine]", 
       ",", "\[IndentingNewLine]", 
       RowBox[{"Hyperlink", "[", "\[IndentingNewLine]", 
        RowBox[{
         RowBox[{"Import", "[", 
          RowBox[{
           RowBox[{
            RowBox[{"NotebookDirectory", "[", "]"}], "<>", 
            "\"\<downPDF.jpg\>\""}], ",", " ", 
           RowBox[{"ImageSize", "\[Rule]", "TamanhoHeader"}]}], "]"}], 
         "\[IndentingNewLine]", ",", "\[IndentingNewLine]", 
         RowBox[{
         "\"\<http://www.mathematica.com.br/resources/notebooks/\>\"", " ", "<>",
           " ", "\[IndentingNewLine]", 
          RowBox[{"StringReplace", "[", "\[IndentingNewLine]", 
           RowBox[{
            RowBox[{"FileNameTake", "[", 
             RowBox[{"NotebookFileName", "[", "]"}], "]"}], ",", 
            RowBox[{"\"\<.nb\>\"", "->", "\"\<.pdf\>\""}]}], 
           "\[IndentingNewLine]", "]"}]}]}], "\[IndentingNewLine]", "]"}], 
       "\[IndentingNewLine]", "\[IndentingNewLine]", ",", 
       "\[IndentingNewLine]", 
       RowBox[{"Hyperlink", "[", "\[IndentingNewLine]", 
        RowBox[{
         RowBox[{"Import", "[", 
          RowBox[{
           RowBox[{
            RowBox[{"NotebookDirectory", "[", "]"}], "<>", 
            "\"\<downCDF.jpg\>\""}], ",", " ", 
           RowBox[{"ImageSize", "\[Rule]", "TamanhoHeader"}]}], "]"}], 
         "\[IndentingNewLine]", ",", "\[IndentingNewLine]", 
         RowBox[{
         "\"\<http://www.mathematica.com.br/resources/notebooks/\>\"", " ", "<>",
           " ", "\[IndentingNewLine]", 
          RowBox[{"StringReplace", "[", "\[IndentingNewLine]", 
           RowBox[{
            RowBox[{"FileNameTake", "[", 
             RowBox[{"NotebookFileName", "[", "]"}], "]"}], ",", 
            RowBox[{"\"\<.nb\>\"", "->", "\"\<.cdf\>\""}]}], 
           "\[IndentingNewLine]", "]"}]}]}], "\[IndentingNewLine]", "]"}]}], 
      "\[IndentingNewLine]", "}"}], ",", "\[IndentingNewLine]", 
     RowBox[{"{", "\[IndentingNewLine]", 
      RowBox[{"Style", "[", 
       RowBox[{
        RowBox[{"Text", "[", "\"\<Complexidade\>\"", "]"}], ",", 
        RowBox[{"FontSize", "\[Rule]", "22"}], ",", 
        RowBox[{"TextAlignment", "\[Rule]", "Left"}], ",", 
        RowBox[{"FontWeight", "\[Rule]", "Bold"}]}], "]"}], 
      "\[IndentingNewLine]", "}"}]}], "\[IndentingNewLine]", "}"}], ",", 
   "\[IndentingNewLine]", 
   RowBox[{"Frame", "\[Rule]", "None"}], ",", "\[IndentingNewLine]", 
   RowBox[{"Alignment", "\[Rule]", 
    RowBox[{"{", "Center", "}"}]}], ",", "\[IndentingNewLine]", 
   RowBox[{"Spacings", "\[Rule]", 
    RowBox[{"{", 
     RowBox[{"0", ",", "0"}], "}"}]}]}], "\[IndentingNewLine]", 
  "]"}]}], "Input",
 CellChangeTimes->{{3.5288463191460967`*^9, 3.528846429227393*^9}, {
   3.5288464596161313`*^9, 3.5288465868474083`*^9}, {3.5288466696691456`*^9, 
   3.5288466701061707`*^9}, {3.528846742195294*^9, 3.528846743749383*^9}, 
   3.5288467754371953`*^9, {3.5288468122312994`*^9, 3.5288468126593237`*^9}, {
   3.5288468544297132`*^9, 3.5288470496398783`*^9}, {3.528847093431383*^9, 
   3.528847211995165*^9}, {3.529108833437517*^9, 3.5291088338203325`*^9}}],

Cell[BoxData[
 TagBox[GridBox[{
    {
     TagBox[
      ButtonBox[
       PaneSelectorBox[{False->
        FrameBox[
         StyleBox["\<\"www.mathematica.com.br\"\>",
          StripOnInput->False,
          FontSize->32,
          FontWeight->Bold],
         StripOnInput->False], True->
        StyleBox[
         FrameBox[
          StyleBox["\<\"www.mathematica.com.br\"\>",
           StripOnInput->False,
           FontSize->32,
           FontWeight->Bold],
          StripOnInput->False],
         LineColor->RGBColor[1, 0, 0],
         FrontFaceColor->RGBColor[1, 0, 0],
         BackFaceColor->RGBColor[1, 0, 0],
         GraphicsColor->RGBColor[1, 0, 0],
         FontColor->RGBColor[1, 0, 0]]}, Dynamic[
         CurrentValue["MouseOver"]],
        BaseStyle->{"Hyperlink"},
        BaselinePosition->Baseline,
        FrameMargins->0,
        ImageSize->Automatic],
       BaseStyle->"Hyperlink",
       ButtonData->{
         URL["http://www.mathematica.com.br"], None},
       ButtonNote->"http://www.mathematica.com.br"],
      Annotation[#, "http://www.mathematica.com.br", "Hyperlink"]& ], 
     "\[SpanFromLeft]", "\[SpanFromLeft]", "\[SpanFromLeft]"},
    {"", "", "", ""},
    {
     TagBox[GridBox[{
        {
         GraphicsBox[
          {RGBColor[0, 1, 0], RectangleBox[{0, 0}]},
          ImageSize->65], 
         GraphicsBox[
          {GrayLevel[0], RectangleBox[{0, 0}]},
          ImageSize->65], 
         GraphicsBox[
          {GrayLevel[0], RectangleBox[{0, 0}]},
          ImageSize->65]}
       },
       AutoDelete->False,
       FrameStyle->Directive[
         Thickness[10]],
       GridBoxAlignment->{"Columns" -> {{Center}}},
       GridBoxBackground->{"Columns" -> {{
            GrayLevel[0]}}},
       GridBoxFrame->{"Columns" -> {{True}}, "Rows" -> {{True}}},
       GridBoxItemSize->{"Columns" -> {{Automatic}}, "Rows" -> {{Automatic}}},
       
       GridBoxSpacings->{"Columns" -> {{0}}, "Rows" -> {{0}}}],
      "Grid"], "\<\"        \"\>", 
     TagBox[
      ButtonBox[
       PaneSelectorBox[{False->
        GraphicsBox[
         TagBox[RasterBox[CompressedData["
1:eJzNWwdgFWW2TigBpSVB2VV3FZ/lsbqIu2/1CT5FUEAElSquDQTRxQChplMC
IUAoobfQIdIDhBIgtNBCekIoKdy02/vMvXfmzu3v++dPLjcFDKD73nG4zp3M
zP2/U75zzj//vDg2dNiPLfz8/Ka3xcew78P7TJv2feTwVvjSN3LG+LEtsfMZ
/g3CP7Lv+Y3EXSc2m8BxPM9b7Xa7w+FwOp042JzLf6uR/H4CLC6Xy2KxGAxG
A/7VCcuyJpMJOwzDcBxntVptNhuw4+Rm3vn/CXwM2+l0WCy8wWg2MiajjwCv
VquV+4hCoVCpVGq1SqfT6fV6YIdmgB1m/1Xg/yd48aOCAIBOOKfZzBsZDqYD
Mi9GQMAnYAKXok7kcplMJq+pqaqqklRU3K2oqKisrMAXqVSqVCo1Gg00AwcA
dlF79bz93wwTvw79E4BWXrASYVjOyLAN7Ah01IIYP8VId+SKquoagq9CFIlE
ctdHbotSWlqK49XV1VAKIP+bMYJSoGR8En6hABnOYIQdGa8FYT4YBfEImLCR
6KhKheiuIlSZVAqAkgofqRQFO0BXUlICmDdv3iwuLqbG/XdipJx5DyBvRTAi
qliWMxgYo8g7wAXNw748z+Er3BOb15QiRqlUVlFVXdFYALO8vPyOKMAIdDgC
76XU/ZvBwK1cTreTbg6ygQwd+HTaeN5pE/DJm80iNg4wgAXfDAwHd9UxrJnj
YGSrw2FzOO3gW56HRWWyOlOKCIkdZVUN7OgVoIMRCwsL4QzwVRyBSn8jgC43
BnX/P9vET7vH4xD3seGHBZfDzAtGg4nRMbqKGk11NWtiLDVVrLSaqaoyGw0W
u12vNcrkCoRVHUZixxppRUVl0xjhqzk5OSq1CqfDpjjd89iO6vbARA7cAnbi
7pZbiosseTnma1fNZ08ZjxzU7dylXr9etnSZYt6CmqioqskTq8eOrhg2vHzA
wNLefW/37FXc482Cbt1uPPfnghdeLJ0Yoly7Shs1Sz4zTLUoninMAT8iKjVa
DY3KWo9VSmWKyiYBQvLy8jRaNVIMvBQUhCzzmBhdLgdsZ7qeefPtf+S275gX
8ERBy5b5/i2y/Pyw5fr55Yif2M/087smfl4XD9Itz+ccbDfe7VUVP18XG6sM
nSKPmW2sLoc3W8wWL8fWBWTTnANEBKAGKtHW1NRQvkVkPIb9iPDS6qJnngGE
HH//HD//PL+WGHC+OGCMv6h1m/xWAXmt2+a2bVHYvk1RuzYFrVvktvDPDmid
16rNzeAOd954pfSjXuXD+lWM+vhW12dyn3mmPGSCfHmietJU5Yk0M5KLxWIy
8WAkuCuxo5gkFQqpVFFZWVUPI9wSABGDMKGCnCEFRiBFhnpEgOKF6o3riS1a
t8lt0SLXv2VRxw63+/WsHDey+scvy/q8VRjYNs/Pv+S//6bdvJxN3W9IO6ha
Fnf7re5FrVoU+PtLRg3ilNU2jdyhqrHp1JUTx0An11u0uN23r3TOLPmxVM7u
sIrci6IGzFqfV2U1UpFz6lACTn5+Ps2qMpGEwTZADZt6Hs1RnaANT83Chdn+
/jBHTosWQHqz+4tmWZlNXWmT3OJNxpq4yMIAv+rQ8fBkQ+oO7e51nFxiqSot
7fsOTFwdMsbltFRHjC/t81ZJz7/mdQnMaQXLts6GV3fpXLoq0UD4luc4Cwob
RWNR1oBzKn04hwJEjqBGhKD4gaMi1T6CAd0iQOXqNQirvFat8lq0xJjv/KOb
Xa9QrIy5+UZX/f5tdkZT0r1r1b++ElhFae83C1r6lbz1slVy03g+rbhDm8pv
h9hYbVXI8JIP/iYZ+N6tl57Px338W+QHtIEpswYNqDFqUapq1ETqma8OIckd
8ioahbBgYWEB0JnNZsCkhR+8mkaoIAgPjdBBAMq2bz3t53e2dcC5Vq3S/fxz
Xn/BJq+SxM1Ib+kniZ1iF0x5PV+/Nfpzu0VX+EmvdP+WGS38KpbMElh9bo//
yPustyBYnKzSoam0GrV3Jo47549btT4XEJDu73/l4wFqljHUldwYM2D6UI1X
xNwhemphYRHQgVjEloWhOoG7woj4bH6TUmdBEoN3Dh9a5+eX1P7JpHZPbAwI
2Ne9q0FyR515tnztQptRITmxb9uzQWe/GWLnDOkj+60LCNjUNiBvTqidZ1Le
6X7sk3dtnO7WpiWnvxx4/NO+O159fsOTbZKefCKpfbt1Lfz3f9hHZWQMeiK0
qAOBNOGohHSkMmVlVbWkqKjIYjHDWCYTxzAs+hGqEAQjMOLrIwAsSU+LCmg5
Jzh4dnBwVMeOy7q/pCzOY/XqyqzLV9YvSXzrtdnt2+/8YpBg0u4dM2zmk21i
unQo2L3BrKhJ+OvLm/r3Ehj50YljIgOemPVku9kdO8wKDJwVFDSny9NhrfwX
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
L9TDKT/8HkL558FzgL+f/C+Rj0/W
           "], {{0, 78}, {75, 0}}, {0, 255},
           ColorFunction->RGBColor],
          BoxForm`ImageTag["Byte", ColorSpace -> "RGB", Interleaving -> True],
          
          Selectable->False],
         BaseStyle->"ImageGraphics",
         ImageSizeRaw->{75, 78},
         PlotRange->{{0, 75}, {0, 78}}], True->
        StyleBox[
         GraphicsBox[
          TagBox[RasterBox[CompressedData["
1:eJzNWwdgFWW2TigBpSVB2VV3FZ/lsbqIu2/1CT5FUEAElSquDQTRxQChplMC
IUAoobfQIdIDhBIgtNBCekIoKdy02/vMvXfmzu3v++dPLjcFDKD73nG4zp3M
zP2/U75zzj//vDg2dNiPLfz8/Ka3xcew78P7TJv2feTwVvjSN3LG+LEtsfMZ
/g3CP7Lv+Y3EXSc2m8BxPM9b7Xa7w+FwOp042JzLf6uR/H4CLC6Xy2KxGAxG
A/7VCcuyJpMJOwzDcBxntVptNhuw4+Rm3vn/CXwM2+l0WCy8wWg2MiajjwCv
VquV+4hCoVCpVGq1SqfT6fV6YIdmgB1m/1Xg/yd48aOCAIBOOKfZzBsZDqYD
Mi9GQMAnYAKXok7kcplMJq+pqaqqklRU3K2oqKisrMAXqVSqVCo1Gg00AwcA
dlF79bz93wwTvw79E4BWXrASYVjOyLAN7Ah01IIYP8VId+SKquoagq9CFIlE
ctdHbotSWlqK49XV1VAKIP+bMYJSoGR8En6hABnOYIQdGa8FYT4YBfEImLCR
6KhKheiuIlSZVAqAkgofqRQFO0BXUlICmDdv3iwuLqbG/XdipJx5DyBvRTAi
qliWMxgYo8g7wAXNw748z+Er3BOb15QiRqlUVlFVXdFYALO8vPyOKMAIdDgC
76XU/ZvBwK1cTreTbg6ygQwd+HTaeN5pE/DJm80iNg4wgAXfDAwHd9UxrJnj
YGSrw2FzOO3gW56HRWWyOlOKCIkdZVUN7OgVoIMRCwsL4QzwVRyBSn8jgC43
BnX/P9vET7vH4xD3seGHBZfDzAtGg4nRMbqKGk11NWtiLDVVrLSaqaoyGw0W
u12vNcrkCoRVHUZixxppRUVl0xjhqzk5OSq1CqfDpjjd89iO6vbARA7cAnbi
7pZbiosseTnma1fNZ08ZjxzU7dylXr9etnSZYt6CmqioqskTq8eOrhg2vHzA
wNLefW/37FXc482Cbt1uPPfnghdeLJ0Yoly7Shs1Sz4zTLUoninMAT8iKjVa
DY3KWo9VSmWKyiYBQvLy8jRaNVIMvBQUhCzzmBhdLgdsZ7qeefPtf+S275gX
8ERBy5b5/i2y/Pyw5fr55Yif2M/087smfl4XD9Itz+ccbDfe7VUVP18XG6sM
nSKPmW2sLoc3W8wWL8fWBWTTnANEBKAGKtHW1NRQvkVkPIb9iPDS6qJnngGE
HH//HD//PL+WGHC+OGCMv6h1m/xWAXmt2+a2bVHYvk1RuzYFrVvktvDPDmid
16rNzeAOd954pfSjXuXD+lWM+vhW12dyn3mmPGSCfHmietJU5Yk0M5KLxWIy
8WAkuCuxo5gkFQqpVFFZWVUPI9wSABGDMKGCnCEFRiBFhnpEgOKF6o3riS1a
t8lt0SLXv2VRxw63+/WsHDey+scvy/q8VRjYNs/Pv+S//6bdvJxN3W9IO6ha
Fnf7re5FrVoU+PtLRg3ilNU2jdyhqrHp1JUTx0An11u0uN23r3TOLPmxVM7u
sIrci6IGzFqfV2U1UpFz6lACTn5+Ps2qMpGEwTZADZt6Hs1RnaANT83Chdn+
/jBHTosWQHqz+4tmWZlNXWmT3OJNxpq4yMIAv+rQ8fBkQ+oO7e51nFxiqSot
7fsOTFwdMsbltFRHjC/t81ZJz7/mdQnMaQXLts6GV3fpXLoq0UD4luc4Cwob
RWNR1oBzKn04hwJEjqBGhKD4gaMi1T6CAd0iQOXqNQirvFat8lq0xJjv/KOb
Xa9QrIy5+UZX/f5tdkZT0r1r1b++ElhFae83C1r6lbz1slVy03g+rbhDm8pv
h9hYbVXI8JIP/iYZ+N6tl57Px338W+QHtIEpswYNqDFqUapq1ETqma8OIckd
8ioahbBgYWEB0JnNZsCkhR+8mkaoIAgPjdBBAMq2bz3t53e2dcC5Vq3S/fxz
Xn/BJq+SxM1Ib+kniZ1iF0x5PV+/Nfpzu0VX+EmvdP+WGS38KpbMElh9bo//
yPustyBYnKzSoam0GrV3Jo47549btT4XEJDu73/l4wFqljHUldwYM2D6UI1X
xNwhemphYRHQgVjEloWhOoG7woj4bH6TUmdBEoN3Dh9a5+eX1P7JpHZPbAwI
2Ne9q0FyR515tnztQptRITmxb9uzQWe/GWLnDOkj+60LCNjUNiBvTqidZ1Le
6X7sk3dtnO7WpiWnvxx4/NO+O159fsOTbZKefCKpfbt1Lfz3f9hHZWQMeiK0
qAOBNOGohHSkMmVlVbWkqKjIYjHDWCYTxzAs+hGqEAQjMOLrIwAsSU+LCmg5
Jzh4dnBwVMeOy7q/pCzOY/XqyqzLV9YvSXzrtdnt2+/8YpBg0u4dM2zmk21i
unQo2L3BrKhJ+OvLm/r3Ehj50YljIgOemPVku9kdO8wKDJwVFDSny9NhrfwX
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
L9TDKT/8HkL558FzgL+f/C+Rj0/W
            "], {{0, 78}, {75, 0}}, {0, 255},
            ColorFunction->RGBColor],
           BoxForm`ImageTag["Byte", ColorSpace -> "RGB", Interleaving -> True],
           Selectable->False],
          BaseStyle->"ImageGraphics",
          ImageSizeRaw->{75, 78},
          PlotRange->{{0, 75}, {0, 78}}], "HyperlinkActive"]}, Dynamic[
         CurrentValue["MouseOver"]],
        BaseStyle->{"Hyperlink"},
        BaselinePosition->Baseline,
        FrameMargins->0,
        ImageSize->Automatic],
       BaseStyle->"Hyperlink",
       ButtonData->{
         URL[
         "http://www.mathematica.com.br/resources/notebooks/\
NovaVersaoMathematica8.0.4Disponivel.pdf"], None},
       ButtonNote->
        "http://www.mathematica.com.br/resources/notebooks/\
NovaVersaoMathematica8.0.4Disponivel.pdf"],
      Annotation[#, 
       "http://www.mathematica.com.br/resources/notebooks/\
NovaVersaoMathematica8.0.4Disponivel.pdf", "Hyperlink"]& ], 
     TagBox[
      ButtonBox[
       PaneSelectorBox[{False->
        GraphicsBox[
         TagBox[RasterBox[CompressedData["
1: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
5FQCyfKOJhy1WExJSY6bEORPKlJSUm7cuLFp0ybYQw06ABYWgS8EFeSNoskq
iBZGsJhQ1nj9+e11kTPyhAO59evT61dm1q/KrF+ZUb8y1b4io34VbJkA2ba0
UPrj0MPZq7dPrlKU0lrMBD4j+e4Tvw5JnTwfurZN/2qOjaDBcGpFjjRzdddv
XHHpfLpVux1+fkVR9+xGESOVHE9KlarTYaErOyBl22aatywiF03XzflcP7aX
KqRv8rgws7oY580CBvYNzIxRICmaUzM0ywDnkJjVak5JSbI2DGgAQRpA5aEf
fPLkCXSCkJ/FRcWUCc0sSTh38+Cl+3/cf3PqRdL9V2lvtx3b+uulufn2vanW
5QAwXVqVIa2GLb1hnyatTpVWJ9cvyZcit575au/+RUpNNa5FRSOqz3v5IMC7
zCfgpUf7N98vFiVJRQoazlxsoziJTd278Zy7y02XjpGBffCcdKMFCgKXKFEX
9+rnPu2LN30t7VxOrpyjWzwBmzZQMXRAzoAQPvYpLBxJECxNELRRBCZl1QTD
N3zxZZAjKH/hAnX3/v37hw8fQlMP6gAiCHhPnTx999Xltb99u3THuDPPF+27
NWnr+Unrj8+e9+vIiFcz86W16dKyZGlVElSffckb8+KX4oLH7Lx71NdRxKyb
5FdxwpYNO0eejlxDkSRjsIiCHVOWPZg4Idsr6G2HDm8XzQNTy5OipLFbtEbU
gqnK31z6xDfJvcvpdm6vd64zWTjoXQScl8z0oz0/VWz+Vtqzmt32g371VHL+
sLopQ5R9g9HTxynJDrzJN+S0EadZWqPnOMAJzZ/ZbIQOCAQCWjz0r6FUKkH0
ofqeP3++edPmZRsXfb9xysoDozOZnWXS1gzrurfklmjdljTzlnTp2xjbvEfG
+VH0jIvaL07UjomoHPFHadj+siF7iwfvqw69rZw/f7nPxi1flNXl4Q5DZao3
i1n7f0vuEqz26hHT71NNUYJSYhU4J1VbjdA3U2WP+vRKde94y8f1TvgAQaB4
2qhnTYSAGgte6XcskXYsE/YuRTfNwn76vG7hSENId82ePYRkVTEGaJF5wmzC
GZbR6HlgQ7CljhrMzEyXeyVZBKFXknUQShJ0sKio8NLNO8Mmho3+pvuZhGmZ
1h/Spe/SpBUJ0rpocdFdYsxpzfAjitF/VA3dVz54b0Xovqohe2uG7leO2Fkx
eK9mxEXVzNWne03Z2HVZ5KTd51ddvLb7wYujVe+vZYSPrG3vV+HZFV+3RLBq
CiXeRNkUJkEvKN/2+izJu8vNYJf3g4JVykqBtagEG2WhjckP9evm2bYu5Pf+
xOxaiK2bUrvsc2FwiH7fPlwyqwSMp0mBNJtIluW0KCwNw8gAs7IyPny1JPeD
8m0kkLTQUJSUFPOcdOzk1ZU7fvxud997dXMSpAUPjFOvYV8dqxkbWR22v2rw
7zVDf68L21c3dJ9y2D7l0N8UYXuVQ3fVhe1SDjmpm3JB881pxeyDBVN2pk/e
/2raysgha45MIBOvZn8zL8crkG3RpXbDFiqnGIih0i7qqnIKAwZn+HSL6t3x
dW9/vaqGY80qHrSXRq9GEEsmC5u/5n9bZN67FP/1O83aicKEQWjkYcpmUguQ
mqRImI3QTwhaaAloEA0CkwHKEZQ7Johafn7+rVu3QOgdoSwpNtGSqpqNSUqa
v23qutsjHgkLj9YNPVw78nBdeIQy/JB65AH1sAPq4fvVw39XDt2vGgb731Ww
DdurDDuoGL1XMSZCM/qkdsxxy6z7/Mrdl0f8cnWOwpZr1FWhj+9X71j/fvm6
opM3VUXlJkmsPRlZ5u6v6PrJ9Q5uV4b0tZqgwRU0rElCtfiOn7nvx1AbJ3Lb
v7HvXk7sXUpumYnOGqY5HSmaLVqewnhKIKwiyaBGteMzogYW/TiC0NUCIuCZ
ffv2Ab3IX1UUFRfX86S6qja3sPL4vRNTdvXenTHmHDnpkG54hGH0H5oREbox
EdpRR7SjYB+hGRmhgf2ow6oRh1XDD6mGHawbvkc96kj5oCsVw/YYJn1z1n/v
4gGqonilRFNGM28yKiWcrBftNG+2cNbCjPzhYzK690jp0O1Yc7f40wclM4PS
HGOVzBmZ6Ldfmb8bol83kto43bplieGPNcYd3+p+HKe8ccou2vQspRFpnrAL
FKu2qIzQYpAM/hdA+XbK9PT0iIiIQ4cO7d27F+wNdPRajaasvFyyEoxekZdf
9CT+9eI/Zsw80e0yMz1CP+IwOvIQGhaJDovUj4jUjoLtqG7UUe2IY5phkaph
EcrhkarwCG3Ybn2fc5pRj2qmLbnxyXdzXJ+Fhyk3/8YlZ1p0mMTaTKKESvWS
xVJfXpQ/Y1Zq5853QjwverqeCumtUBUAJRA0I5pY9PJpQ3ioZe5n6IrhzOqp
po2LqL2rzXvmk+tnGx7fNBttWoY18ABKhErUG3U8CW0rNL3Q0ZuzsjLlr88g
dkeOHAER3L1797Zt26BRunr1KnSFFRV1OVkZ0U8ePbj1/Pz1i1M39d72LvQ8
MfW4IfykPvQYNjASCz2GjjiqH33UMPIYGnbEMCjSMBhQH9VMOqwfdIQKOYlN
WXax58Kpba6P7V75eR/94BDV8AGqn76u2rtbeemR/vHz6qOROWPGJnbt+Dyo
3cNA99PtXDL27rFaeCVj15tQszpFOTecH9mTmjnEMm+s7YdpzIbZ9k3zhd/n
cduXW97F6e3mWsEE1cczOmAYEUwQa6RYjiQdXjQrKwsKEHyLsmFUVVXl5ORA
8wtqCEiXLVt28OCR40ePVZUU5mdmnLt6evmB76Yc6H5KM/40NeyofvgpIvwY
NvIYNuYYFn4UDT9qCD+GjjmGAtLhx9AhR4kvT+oXrzzdb+q4loem9noxJTR/
4iDthIHE6P76/j2V/gHK4J613YJUbj6lnbvEBnu979Elul2nx+OmSSrcRkoG
SqyVaPH6RUP3YHRUX/W0z/hZo/iFE6mV06lNX3M75pGHN0mVRYTI63gTD5AY
A8PpGxp9I838DVB2oSAQZMOQPxeVlRF86ZZtu2fPmnf2eIRN1N+5ff1s1LWv
to1c/tTvqnnkcTT8JD7pJDn2BDHuODHuGD4+Ev3iBDEpUj/mqGH4BS40Apu+
IGrsZ6HOm3t7pn3xeeW40XWThyunfmaY8BkzIszUv7ctuBMZ5KUI7loU6F3e
wy+3vffDXv30mQmUWeRRM23kGLy2cvxMs3sQMbCPatxA3YwR1DdjhcUTtZu+
ojZ9o7m030ooWAYYxcTQDMsaKE5PciRHGVmaI/4CKHeC8q3pEE3ABSoPzS8E
FLxaVa36hx+XnT91pDArLubZy9SMqo2Rm778vePh6kHnuSkniS/O0ONPURNO
UOOPU+OOkWNPUeNPoOGXqckndCOWXewWGuo80c95dbtGcaP6Kr/7omrOsNrZ
Q7STBjNDh5ChfTWh3rpPuhb37l4c8km5m19S31Bd4iNC0mhFnU5ALZBZh4+V
+vYXu/XjugdjQ/qpvhxMzhohzP+cWj3RsOZ77O0tQdSKBCsSIgUGlEVJwYAJ
lEiKQKQfAEr/OuBJ6ARBJoBICwsK7JJUWVOdkfo+JznRUGMoyKm78/LxzF+H
L7je4wo/4xz7+Wlq1Blm3Al63Al21Aku7DQTdomeeE3/zY/3+09Z4DnBt1V4
O+TbVsiBrq1LZg2jF4xmvupnnNjXOrIXO6onNri75Btgcw8q6/RpyrTZVGaS
1c7QtAFlSY1Em3NeZ/UOq+jWSxvQk/YLwHoFsmG96MmDdPOH2r8LV65Zxtal
G+yYEWWsmAgWjWFxXMAMIgXWB+j0A8DHjx/Hx8dnZmZWOG5dcNQgOFIAqNfr
y4FFJQn6CLvVYhckETOra1RJGWm7zv0+ZkPIgfwR182jz7DDz7DhJ9kxZ4zD
T7J9LwtDrui/XHp5UPi6/sdvRERH3T22ft26zwYua9n0WNumhYMCuS8GkONC
9OMDVMO6GfoGqT8NQUPDqchjFK1CLYLFYDRjZl6QrFo8c3p4gn+P0uAQhX+Q
wr8bGuwrhQTwo/uo54SKU4cRx44LnFJpRU0kZ8UEWBewnzhPGATajPM8CD9F
QVoCwDt37ly8ePH48eNHjx4FjVi3bt3ixYsvXLhw8+bN27dvZ+ekFxRlqZRq
XGvmCBOury0vL3mdmLl47/ffnwu4RIy8Yh53nht73hh+Vhh2WRx+nZzw05Ue
k37ufeDykbeJWZWlGlrHCGpdbeybmH07biz8+sX8mcUrv69b+1PNmuU1v+0l
nkTx6hJCItU24AkTQQq0SbCjRMmKLckd2sX36pER2L0qOLCme1fC35sM8raG
9mVHh9YumGjPyBQEQm0G18kbCbDlFAv2kwdLyhhJ7mOA8ke+oBTyrengZEAd
IIgA8NSp0ydPHDx8eP8fB49FHr189vT5yxeOXrtw6dSpGyu2rxy+qNP2xIE3
zF9d5MZdEMZcNk64Ss1ccaf/tC19j1z7LSk5o6C4usag0hFAbpRo5m2S3QIl
IFpEHWFVYSbByoCBou2MYCR40YY6ZK9OwnhjTfrPC2O8PAt7dEvy90kPDsj0
9zP49cC7+5T09TP27Ef3Diu+9Fs9z5pIMDCMjmc4wIjTPA3dLgW5CivluMvl
L4AffNq/DWBXUTSylFqjVhaWVCVmZEbHPrt3+9bZI2f27Nj13ZIZAyeETDnU
7TT65TXjlKvWcReYKfOuhPRb4Ld639roN7EVuQV6jYKEBLIxgo2nBYbnTSxt
JWjIKpvaKlYJrJaxcJTJQgiSjrFgtKneZMQUiSt+etzZ/W0Pj7hA3wK/gJxu
gcV+wVpv/wp/n7LegWjXnqqvvqWJEszIWfWgfUKNicEFDvxIA0CaoxlHw8v+
DVB22rLZlm2b/AnGX0CN8v/s8l2tcGC0iyxRUZd+7c7NsVt6/fg86KE07zI/
ZtHDboNWeQ/8esS8JSs3rN1y+Lcdd44ffx/15F1sTHJeer6ivExZR2C0meTA
WNitlJUHm2ZVS5ze5PhxiVESa3IyHk6Y+9jV/7WP36Oe3s+CfXO9upf6flre
NajEPzCnb5DKO0jnP9QY+5awEyqRs6OCiRbqrBzUnc0BkKZYRnB8rcdA1/QB
4IePDeV7LT48/AD872fs9R8Bl+qq6rae3j5xV+CJgqFLb7p9ueHTI1cvJaTn
5xa9T0x99CI69s6d51evXDp9+kxEwwCndOz4sUuXLt25fSf65cvUlLTC7KK6
qhotZyiqynz9+647fp/ea+1xp3uXcyHtb/Tq/MbHJ6FH96QA3/dB3qk9/TMD
grN6DjVdf1jPkdVmDFKRY0Ea/tz/50bTpNVqhn7ww/xlU/pxispfW3yA/+Gj
RRktWIaY7PiFf0z+YlOrmbs9jzzYUqrSiiY56HzDJSSrDdpMAZxtTU0NVDe4
3OfPX9y6dfvsuXPHjx4/c+Doqf2Hft/567LvZv/Yt89+74A7PgH3unR54t0h
pmuHN75dXvt7J/bwqfYJqPH0f9dzAPb8rigRKAfpKfxfuP4ToFyDoBRAnqtW
rQIuLSsrkwVRVv8P0fxwt8mfK2C3GWj2VfqLiJtrH6WeKNeVsLzNbqm3g6zY
uHorGIh/ifjHw3GvO0MpDZry2urM7Kz4mOj3j+5d3rh6e9+QM34+Lzp1ju/Q
4UX3zkm+Plmdu8W7d00eNZZ79dRaT1QZUbVZZDiL40vmfwZQngM4TwRBunfv
7ubmNnToUBDE/5yVXKd/B9Fus5rrBcFCizRjYkWzzVGosNmskt0K4bPb7B/u
s/23zG8IryRK9ZwkWf+6flF13q4f5+zy7/bQu9vLzl4PunV54tH5eUDPtI1r
8NpsTqIoBjNTIkOZVKKZddwg/08BQnJC+Fq0aAHdxDfffOPs7Hz9+nVIqhMn
Tly7dk2lUkEc5Zr9fwmGXY4mwJF4VrCIAqCzW2xmC+CT5FttZUT/dktVvdVS
D2dBYcNiCLAK9RhDHNm0brOf/3G3jpc7dD4fHBK7/Cd9cky90QDERLGUQPMm
2mh0mFTjf0f3MUB4L3Ce4eHh7du3P3PmzMKFC5s3b7527dovvvgiJCSkT58+
06ZNA7zw/KtXr8B+Hzt2rOEWBcfN+GVF2bUV5VUVuuoqsqCwcs2a5Tt/3VBe
VqhUq2u1hmqlSlFXJ/9CQdUwwB3B/s/fHmKYQGCUwBoFi521AUMrNZqty5Zu
Hj7y7jfz0g/9zmSk1Zsp0EmQUQnnJUwUWBE1cqA4APef1yAALCkp6d27t+M3
sKNHd+3atXPnzgsWLICALlmyZP369XDw008/+fn5ffnllwEBAbAO4HYGDhww
ecrUz0cN+nz0oDGfj12+esPpC+c6eLl/Nrjn+/exCcnJrxLe55WUlJWWwsXB
8kHOwx5sfGFhoeObx8LC1JTkjJz0rOqy3KrK6iqFToen5eTs2fVr9ptoidHa
JdBMI8iZkREEWuRZI6SH42NGjqJEHDdj/1ME4d1XrlzZq1evbt26denSBdL1
l19+6dixY1BQkL+/v7u7+/Lly/v169eyZUsPDw9YgU6dOkG1zp03z821tZ9f
R/eOrp5dPZes+smzo/uUyRMOHdwfNiwspF+/pStXvIqOjo2NPXnyJGQ7JAAA
LC0tBXRv3ryZMX36lg2/5GZllxaXluQXKStrEl/HnjhwoLKkCCf1jvtTCNFC
m0ycSS9wKruotQA8xsyADyNRMwHtH/fR9l8AGo1GSKG4uLgrV66AIz19+jRY
UCi9LVu2jBo1CggHwnf27FkIH6Qu5G1wcDDEeubMmfPmzWvaqMWcr+cMHNLb
o4v7rLmz3F07TPx8UpCfv7+f75eTJ7d1cV2xYjmsVXDDgGwHi3vq1Kl533wz
fdq0Zs1bzvxyekVyjiq/pLq0BFcr30TdO3ngUHlVJYFTNtJop808w+M8TdoE
VCShJQKCYSCQLFSiwP1jgNDOQ38EIpWeng46lZqaCtUF+7dv3z558uTRo0ev
X7+Wb2PbvHnzwYMHly5dOnXq1AN/HFi2fKm/b99FC1b07hfkF+z1xaRJLRu7
fzX2a7+O3v1CQpb88GPr1m1HjR41Z86cgQMHQgI4OTnNmDGjZ8+ebu5uwYGB
zs2bfrtyZUFadkVhYYm6oo5U3bh9JeLciSxdnZbhRNqksbCoCEhIKwMbIXIk
VB8tiCJjsRE2nmP/O0CKIgBgRkY6+Bqoern8FQqFpmEAjUD3BBlVUFBQXFwM
SQWeB+BDar38a9y9e/fs2XPnz1/YunXLhg3rN27cGB4+dtvW7bO/nu3VubOX
lxek8fQZMyCrIdt9fX0hw0eOHNmuXbvhw4dBPjRt2nTdhvVw2cqqSoVKqUf1
p06funj5Uq1SgTX8DBN8l3w3FeO416/h5rgGF+bY0X/+iPHD5rj7+M9BARz5
d8dA/mlpaR+8ClA6pKsoivKPsMB+6BsG9PhAelqtFoSjsmGUNgwADnQBsQbg
UGgxMTFPnz2FiEMb8tvevcBOIDqQ81OmTAkNDf3ss88A77fffgtk1aVhQMLv
27cPLgIMIN8DD3bu6ZOnMDeYg0Nc5Nsj4P9//U78v4wGOfrzQP4RAaCTGn58
DbUPM4RIwfwBCECT3csHyw0PAfjfv+ghSchqmJJ8VzAMmOEH1BDrzIzMlJSU
xMRESHKIOHReV69eBQHav3//5cuXIc/nzp0LSQ6peycqCl4IaQOrDTkD3Sic
kJnluPlW/qHNPx/F/zrkJwEUoAOGBNWDBYe3hrcASwzvAoGAoED+ALfD2sIE
AKAM/INBlcMt31cpt5OwPrCHCUNRV1dXw+Th5Q7IUOrp6RDrd+/egSeMjo5+
/vw5XD8nJwdOhrWChIRZwbvDfGC55F9Mq//3AVOVP7KGlwNzwnXg4kCYQJKA
CxLm119/XbNmDcjfokWLgDwBO7hT+VcGkGyQe1B60A7Dysj3dcv3yn7sweRw
Q5L/+fM0mobT5H92AN4O3hSMrry2MhCYAKQEZBQsArw70BqkPZwDeEv/x1HS
MOC1sKqQjXBl2TJBGcKcQSaALcGoREVFAWFGRkYCYf7222/bt2/ftGkThHj1
6tUrgPSXL1+2bBkcA/nv3LkTTgPmh5fAayFGMCuAAAkMAOX7bOWIy79u4xuG
/OEk1jBgBWQ2gNMgoLt27YKUhuSEGf6v6D4MGSDEEbJLXnP5nwIAzgT4kE6Q
NlBBABnSCXjjxYsXsKr379+/c+cOGLaLFy+CagMb7NmzZ9u2bRs2bPj5558B
L/gEOAAi3bFjx4EDB6Di4Hx4LaweBAsiBW4QgABMiK/5ryHHGvawCPAW0MjA
ZCDopoZh/P81PvybGx/M8v8DUZkuNw==
           "], {{0, 78}, {75, 0}}, {0, 255},
           ColorFunction->RGBColor],
          BoxForm`ImageTag["Byte", ColorSpace -> "RGB", Interleaving -> True],
          
          Selectable->False],
         BaseStyle->"ImageGraphics",
         ImageSizeRaw->{75, 78},
         PlotRange->{{0, 75}, {0, 78}}], True->
        StyleBox[
         GraphicsBox[
          TagBox[RasterBox[CompressedData["
1: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
5FQCyfKOJhy1WExJSY6bEORPKlJSUm7cuLFp0ybYQw06ABYWgS8EFeSNoskq
iBZGsJhQ1nj9+e11kTPyhAO59evT61dm1q/KrF+ZUb8y1b4io34VbJkA2ba0
UPrj0MPZq7dPrlKU0lrMBD4j+e4Tvw5JnTwfurZN/2qOjaDBcGpFjjRzdddv
XHHpfLpVux1+fkVR9+xGESOVHE9KlarTYaErOyBl22aatywiF03XzflcP7aX
KqRv8rgws7oY580CBvYNzIxRICmaUzM0ywDnkJjVak5JSbI2DGgAQRpA5aEf
fPLkCXSCkJ/FRcWUCc0sSTh38+Cl+3/cf3PqRdL9V2lvtx3b+uulufn2vanW
5QAwXVqVIa2GLb1hnyatTpVWJ9cvyZcit575au/+RUpNNa5FRSOqz3v5IMC7
zCfgpUf7N98vFiVJRQoazlxsoziJTd278Zy7y02XjpGBffCcdKMFCgKXKFEX
9+rnPu2LN30t7VxOrpyjWzwBmzZQMXRAzoAQPvYpLBxJECxNELRRBCZl1QTD
N3zxZZAjKH/hAnX3/v37hw8fQlMP6gAiCHhPnTx999Xltb99u3THuDPPF+27
NWnr+Unrj8+e9+vIiFcz86W16dKyZGlVElSffckb8+KX4oLH7Lx71NdRxKyb
5FdxwpYNO0eejlxDkSRjsIiCHVOWPZg4Idsr6G2HDm8XzQNTy5OipLFbtEbU
gqnK31z6xDfJvcvpdm6vd64zWTjoXQScl8z0oz0/VWz+Vtqzmt32g371VHL+
sLopQ5R9g9HTxynJDrzJN+S0EadZWqPnOMAJzZ/ZbIQOCAQCWjz0r6FUKkH0
ofqeP3++edPmZRsXfb9xysoDozOZnWXS1gzrurfklmjdljTzlnTp2xjbvEfG
+VH0jIvaL07UjomoHPFHadj+siF7iwfvqw69rZw/f7nPxi1flNXl4Q5DZao3
i1n7f0vuEqz26hHT71NNUYJSYhU4J1VbjdA3U2WP+vRKde94y8f1TvgAQaB4
2qhnTYSAGgte6XcskXYsE/YuRTfNwn76vG7hSENId82ePYRkVTEGaJF5wmzC
GZbR6HlgQ7CljhrMzEyXeyVZBKFXknUQShJ0sKio8NLNO8Mmho3+pvuZhGmZ
1h/Spe/SpBUJ0rpocdFdYsxpzfAjitF/VA3dVz54b0Xovqohe2uG7leO2Fkx
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
ZCDopoZh/P81PvybGx/M8v8DUZkuNw==
            "], {{0, 78}, {75, 0}}, {0, 255},
            
            ColorFunction->RGBColor],
           BoxForm`ImageTag["Byte", ColorSpace -> "RGB", Interleaving -> True],
           Selectable->False],
          BaseStyle->"ImageGraphics",
          ImageSizeRaw->{75, 78},
          PlotRange->{{0, 75}, {0, 78}}], "HyperlinkActive"]}, Dynamic[
         CurrentValue["MouseOver"]],
        BaseStyle->{"Hyperlink"},
        BaselinePosition->Baseline,
        FrameMargins->0,
        ImageSize->Automatic],
       BaseStyle->"Hyperlink",
       ButtonData->{
         URL[
         "http://www.mathematica.com.br/resources/notebooks/\
NovaVersaoMathematica8.0.4Disponivel.cdf"], None},
       ButtonNote->
        "http://www.mathematica.com.br/resources/notebooks/\
NovaVersaoMathematica8.0.4Disponivel.cdf"],
      Annotation[#, 
       "http://www.mathematica.com.br/resources/notebooks/\
NovaVersaoMathematica8.0.4Disponivel.cdf", "Hyperlink"]& ]},
    {
     StyleBox[
      InterpretationBox[Cell[BoxData["\<\"Complexidade\"\>"], "Text", "TR"],
       Text["Complexidade"]],
      StripOnInput->False,
      TextAlignment->Left,
      FontSize->22,
      FontWeight->Bold], "", "", ""}
   },
   AutoDelete->False,
   GridBoxAlignment->{"Columns" -> {{Center}}},
   GridBoxFrame->{"Columns" -> None, "Rows" -> None},
   GridBoxItemSize->{"Columns" -> {{Automatic}}, "Rows" -> {{Automatic}}},
   GridBoxSpacings->{"Columns" -> {{0}}, "Rows" -> {{0}}}],
  "Grid"]], "Output",
 CellChangeTimes->{{3.52884632024716*^9, 3.528846429909432*^9}, {
   3.5288464628583164`*^9, 3.5288465705064735`*^9}, 3.5288466705081935`*^9, 
   3.5288467452244673`*^9, 3.52884677587622*^9, 3.5288468134873714`*^9, 
   3.528846857311878*^9, {3.5288469166232705`*^9, 3.528846971633417*^9}, {
   3.528847008860546*^9, 3.5288470226273336`*^9}, {3.5288470948324633`*^9, 
   3.528847232380331*^9}, 3.5291074037263603`*^9, 3.5291077680494003`*^9, 
   3.5291083026883926`*^9, 3.5291088346141367`*^9, 3.529165734850478*^9, 
   3.529172391936202*^9}]
}, {2}]],

Cell[CellGroupData[{

Cell["Introdu\[CCedilla]\[ATilde]o", "Section",
 Deployed->True,
 CellChangeTimes->{{3.5207724966414814`*^9, 3.520772498863609*^9}}],

Cell["\<\
A vers\[ATilde]o do 8.0.4 do Mathematica est\[AAcute] dispon\[IAcute]vel.\
\>", "Text",
 CellChangeTimes->{{3.520769244865491*^9, 3.5207692462295685`*^9}, {
  3.5207701839722047`*^9, 3.5207701911046124`*^9}, {3.5207703317046547`*^9, 
  3.5207703364099236`*^9}, {3.5207725060630207`*^9, 3.520772510413269*^9}, {
  3.52916574721677*^9, 3.529165750899825*^9}, {3.529165809636408*^9, 
  3.529165864206253*^9}}],

Cell[CellGroupData[{

Cell[BoxData["$Version"], "Input",
 CellChangeTimes->{{3.520770363341464*^9, 3.5207703645085306`*^9}, {
  3.520772559744091*^9, 3.5207725601561146`*^9}, {3.529165821791468*^9, 
  3.529165839755517*^9}}],

Cell[BoxData["\<\"8.0 for Linux x86 (32-bit) (February 23, 2011)\"\>"], \
"Output",
 CellChangeTimes->{3.529165840497414*^9}]
}, Open  ]]
}, Open  ]],

Cell[CellGroupData[{

Cell["Desenvolvimento", "Section",
 Deployed->True,
 CellChangeTimes->{{3.5207725214689016`*^9, 3.520772524155055*^9}}],

Cell[TextData[{
 "\[CapitalEAcute] com satisfa\[CCedilla]\[ATilde]o que o anunciamos o lan\
\[CCedilla]amento da vers\[ATilde]o  8.0.4 do ",
 StyleBox["Mathematica",
  FontWeight->"Bold"],
 ".\n\nConstru\[IAcute]da sobre as funcionalidades revolucion\[AAcute]ris do ",
 StyleBox["Mathematica",
  FontWeight->"Bold"],
 " 8, a vers\[ATilde]o 8.0.4 foca no desenvolvimento dos documentos comput\
\[AAcute]veis (CDF) oferecendo um assistente interativo e novas \
fun\[CCedilla]\[OTilde]es.\n\nAlguns dos recursos de funcionalidades, \
estabilidade e seguran\[CCedilla]a inclu\[IAcute]dos nessa vers\[ATilde]o s\
\[ATilde]o:"
}], "Text",
 CellChangeTimes->{{3.5207705823699913`*^9, 3.5207706187170706`*^9}, {
  3.5207725320035048`*^9, 3.520772547533393*^9}, {3.529165898156037*^9, 
  3.529166057375034*^9}, {3.529166104260994*^9, 3.529166217192601*^9}}],

Cell[CellGroupData[{

Cell["\<\
Novas op\[CCedilla]\[OTilde]es no menu e um assistente interativo para a \
finaliza\[CCedilla]\[ATilde]o de CDFs\
\>", "Subitem",
 CellChangeTimes->{{3.529166262108543*^9, 3.529166316889041*^9}}],

Cell[TextData[{
 "Novas fun\[CCedilla]\[OTilde]es: ",
 StyleBox["CDFInformation",
  FontWeight->"Bold"],
 " e ",
 StyleBox["CDFDeploy",
  FontWeight->"Bold"],
 " para gera\[CCedilla]\[ATilde]o din\[AHat]mica de CDFs"
}], "Subitem",
 CellChangeTimes->{{3.529166262108543*^9, 3.529166367217907*^9}}],

Cell["\<\
Indicador de progresso de download para o plugin CDF para o navegador\
\>", "Subitem",
 CellChangeTimes->{{3.529166262108543*^9, 3.529166371819681*^9}, {
  3.529166435280691*^9, 3.529166491251331*^9}}],

Cell["\<\
Mais estabilidade, performance e segura\[CCedilla]a para o navegador com o \
CDF Player\
\>", "Subitem",
 CellChangeTimes->{{3.529166262108543*^9, 3.529166371819681*^9}, {
  3.529166435280691*^9, 3.529166552980211*^9}}],

Cell["Testado no Mac OS X Lion", "Subitem",
 CellChangeTimes->{{3.529166262108543*^9, 3.529166371819681*^9}, {
  3.529166435280691*^9, 3.529166571328034*^9}}],

Cell["\<\
Melhoria no uso de mem\[OAcute]ria da fun\[CCedilla]\[ATilde]o Share quando \
armazenando grandes blocos de dados\
\>", "Subitem",
 CellChangeTimes->{{3.529166262108543*^9, 3.529166371819681*^9}, {
  3.529166435280691*^9, 3.529166573341865*^9}, {3.529166617282603*^9, 
  3.529166672830308*^9}}],

Cell["Atualiza\[CCedilla]\[ATilde]o da biblioteca MKL", "Subitem",
 CellChangeTimes->{{3.529166262108543*^9, 3.529166371819681*^9}, {
  3.529166435280691*^9, 3.529166573341865*^9}, {3.529166617282603*^9, 
  3.52916669499731*^9}}],

Cell["\<\
Nova sintaxe de cores para avisar sobre uso de vari\[AAcute]veis de Module no \
Dynamic\
\>", "Subitem",
 CellChangeTimes->{{3.529166262108543*^9, 3.529166371819681*^9}, {
  3.529166435280691*^9, 3.529166573341865*^9}, {3.529166617282603*^9, 
  3.52916669633732*^9}, {3.529166745170342*^9, 3.529166765651922*^9}, {
  3.529166874033604*^9, 3.529166907746198*^9}}],

Cell["\<\
Melhoria de performance para fun\[CCedilla]\[OTilde]es de cita\[CCedilla]\
\[OTilde]es\
\>", "Subitem",
 CellChangeTimes->{{3.529166262108543*^9, 3.529166371819681*^9}, {
  3.529166435280691*^9, 3.529166573341865*^9}, {3.529166617282603*^9, 
  3.52916669633732*^9}, {3.529166745170342*^9, 3.529166765651922*^9}, {
  3.529166874033604*^9, 3.529166960622986*^9}}],

Cell["Etc.", "Subitem",
 CellChangeTimes->{{3.529166262108543*^9, 3.529166371819681*^9}, {
  3.529166435280691*^9, 3.529166573341865*^9}, {3.529166617282603*^9, 
  3.52916669633732*^9}, {3.529166745170342*^9, 3.529166765651922*^9}, {
  3.529166874033604*^9, 3.529166916060929*^9}, {3.529167023934236*^9, 
  3.529167028813673*^9}}]
}, Open  ]]
}, Open  ]],

Cell[CellGroupData[{

Cell["Obtenha a Vers\[ATilde]o de Avalia\[CCedilla]\[ATilde]o", "Section",
 CellChangeTimes->{{3.529167166480155*^9, 3.529167177240562*^9}}],

Cell["\<\
Para obter uma vers\[ATilde]o de avalia\[CCedilla]\[ATilde]o acesse: \
\>", "Text",
 CellChangeTimes->{{3.529167196284398*^9, 3.529167212642132*^9}, {
  3.529167352835968*^9, 3.52916738951474*^9}, {3.529167457751441*^9, 
  3.529167535903716*^9}},
 TextAlignment->Left],

Cell[TextData[ButtonBox["http://bit.ly/testeOMathematica",
 BaseStyle->"Hyperlink",
 ButtonData->{
   URL["http://bit.ly/testeOMathematica"], None},
 ButtonNote->"http://bit.ly/testeOMathematica"]], "Text",
 CellChangeTimes->{3.529167491283453*^9},
 TextAlignment->Center,
 FontSize->24]
}, Open  ]]
},
WindowSize->{615, 574},
WindowMargins->{{188, Automatic}, {Automatic, 0}},
WindowFrameElements->{
 "CloseBox", "ZoomBox", "MinimizeBox", "ToolbarBox", "DocumentIcon"},
ShowCellBracket->False,
CellMargins->{{0, 0}, {0, 0}},
TextJustification->1,
FontFamily->"Verdana",
FontSize->14,
FrontEndVersion->"8.0 for Linux x86 (32-bit) (February 23, 2011)",
StyleDefinitions->Notebook[{
   Cell[
    StyleData[StyleDefinitions -> "Default.nb"]], 
   Cell[
    StyleData["Text"]], 
   Cell[
    StyleData["Section"]]}, Visible -> False, FrontEndVersion -> 
  "8.0 for Linux x86 (32-bit) (February 23, 2011)", StyleDefinitions -> 
  "PrivateStylesheetFormatting.nb"]
]
(* End of Notebook Content *)

(* Internal cache information *)
(*CellTagsOutline
CellTagsIndex->{}
*)
(*CellTagsIndex
CellTagsIndex->{}
*)
(*NotebookFileOutline
Notebook[{
Cell[CellGroupData[{
Cell[1257, 32, 6038, 129, 70, "Input"],
Cell[7298, 163, 64239, 1117, 70, "Output"]
}, {2}]],
Cell[CellGroupData[{
Cell[71571, 1285, 132, 2, 70, "Section"],
Cell[71706, 1289, 416, 7, 70, "Text"],
Cell[CellGroupData[{
Cell[72147, 1300, 202, 3, 70, "Input"],
Cell[72352, 1305, 125, 2, 70, "Output"]
}, Open  ]]
}, Open  ]],
Cell[CellGroupData[{
Cell[72526, 1313, 119, 2, 70, "Section"],
Cell[72648, 1317, 848, 16, 70, "Text"],
Cell[CellGroupData[{
Cell[73521, 1337, 205, 4, 70, "Subitem"],
Cell[73729, 1343, 297, 9, 70, "Subitem"],
Cell[74029, 1354, 211, 4, 70, "Subitem"],
Cell[74243, 1360, 229, 5, 70, "Subitem"],
Cell[74475, 1367, 158, 2, 70, "Subitem"],
Cell[74636, 1371, 304, 6, 70, "Subitem"],
Cell[74943, 1379, 229, 3, 70, "Subitem"],
Cell[75175, 1384, 372, 7, 70, "Subitem"],
Cell[75550, 1393, 371, 7, 70, "Subitem"],
Cell[75924, 1402, 330, 5, 70, "Subitem"]
}, Open  ]]
}, Open  ]],
Cell[CellGroupData[{
Cell[76303, 1413, 140, 1, 70, "Section"],
Cell[76446, 1416, 278, 6, 70, "Text"],
Cell[76727, 1424, 287, 7, 70, "Text"]
}, Open  ]]
}
]
*)

(* End of internal cache information *)
(* NotebookSignature auT5KxllGvil7D1BsFJ0fg@a *)
