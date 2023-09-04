const allUnits = {
  Area: [
    "Acres",
    "Ares",
    "Hectares",
    "Square centimetres",
    "Square feet",
    "Square inches",
    "Square metres",
  ],
  Length: [
    "Millimetres",
    "centimetres",
    "Meters",
    "Kilometres",
    "Inches",
    "Feet",
    "Yards",
    "Miles",
    "Nautical miles",
    "Mils",
  ],
  Temperature: [
    "Celsius",
    "Fahrenheit",
    "Kelvin"
  ],
  Volume: [
    "UK gallons",
    "US gallons",
    "Litres",
    "Millimetres",
    "Cubic centimetres",
    "Cubic metres",
    "Cubic inches",
    "Cubic feet",
  ],
  Mass: [
    "Tons",
    "UK tons",
    "US tons",
    "Pounds",
    "Dunces",
    "Kilogrammes",
    "Grams",
  ],
  Data: [
    "Bits",
    "Bytes",
    "Kilobytes",
    "Kibibytes",
    "Megabytes",
    "Mebibytes",
    "Gigabytes",
    "Gibibytes",
    "Terabytes",
    "Tebibytes",
  ],
  Speed: [
    "Meters per second",
    "Meters per hour",
    "Kilometers per second",
    "Kilometers per hour",
    "Inches per second",
    "Inches per hour",
    "Feet per second",
    "Feet per hour",
    "Miles per second",
    "Miles per hour",
    "Knots",
  ],
  Time: [
    "Milliseconds",
    "Seconds",
    "Minutes",
    "Hours",
    "Days",
    "Weeks"
  ],
};

const allUnitsSymbols = {
  Area: [
    "ac",
    "a",
    "ha",
    "cm<sup>2</sup>",
    "ft<sup>2</sup>",
    "in<sup>2</sup>",
    "m<sup>2</sup>",
  ],
  Length: [
    "mm",
    "cm",
    "m",
    "km",
    "in",
    "ft",
    "yd",
    "mi",
    "NM",
    "mil",
  ],
  Temperature: [
    "<sup>°</sup>C",
    "<sup>°</sup>F",
    "K"
  ],
  Volume: [
    "gal",
    "gal",
    "l",
    "ml",
    "cm<sup>3</sup>",
    "m<sup>3</sup>",
    "in<sup>3</sup>",
    "ft<sup>3</sup>",
  ],
  Mass: [
    "t",
    "t",
    "t",
    "lb",
    "oz",
    "kg",
    "g",
  ],
  Data: [
    "bit",
    "B",
    "KB",
    "KiB",
    "MB",
    "MiB",
    "GB",
    "GiB",
    "TB",
    "TiB",
  ],
  Speed: [
    "m/s",
    "m/h",
    "km/s",
    "km/h",
    "in/s",
    "in/h",
    "ft/s",
    "ft/h",
    "mi/s",
    "mi/h",
    "kn",
  ],
  Time: [
    "ms",
    "s",
    "min",
    "h",
    "d",
    "wk"
  ],
};

let globalConversion = "Area";

const conversionSwitch = (fromConversion , toConversion , number) =>
{
  let result;
  if(globalConversion == "Area")
  {
    let index = allUnits.Area.indexOf(fromConversion)
    if(index == 0)
    {
      switch(toConversion)
      {
        case allUnits.Area[0]:
          result = number;
          break;
        case allUnits.Area[1]:
          result = parseFloat(number * 40.468564224);
          break;
        case allUnits.Area[2]:
          result = parseFloat(number * 0.4046856422);
          break;
        case allUnits.Area[3]:
          result = parseFloat(number * 40468564.224);
          break;
        case allUnits.Area[4]:
          result = parseFloat(number * 43560);
          break;
        case allUnits.Area[5]:
          result = parseFloat(number * 6272640);
          break;
        case allUnits.Area[6]:
          result = parseFloat(number * 4046.8564224);
          break;
      }
      return result;
    }
    else if(index == 1)
    {
      switch(toConversion)
      {
        case allUnits.Area[0]:
          result = parseFloat(number * 0.0247105381);
          break;
        case allUnits.Area[1]:
          result = number;
          break;
        case allUnits.Area[2]:
          result = parseFloat(number * 0.01);
          break;
        case allUnits.Area[3]:
          result = parseInt(number * 1000000);
          break;
        case allUnits.Area[4]:
          result = parseFloat(number * 1076.391041671);
          break;
        case allUnits.Area[5]:
          result = parseFloat(number * 155000.31000062);
          break;
        case allUnits.Area[6]:
          result = parseInt(number * 100);
          break;
      }
      return result;
    }
    else if(index == 2)
    {
      switch(toConversion)
      {
        case allUnits.Area[0]:
          result = parseFloat(number * 2.4710538147);
          break;
        case allUnits.Area[1]:
          result = parseInt(number * 100);
          break;
        case allUnits.Area[2]:
          result = parseFloat(number);
          break;
        case allUnits.Area[3]:
          result = parseInt(number * 100000000);
          break;
        case allUnits.Area[4]:
          result = parseFloat(number * 107639.1041671);
          break;
        case allUnits.Area[5]:
          result = parseFloat(number * 15500031.000062);
          break;
        case allUnits.Area[6]:
          result = parseInt(number * 10000);
          break;
      }
      return result;
    }
    else if(index == 3)
    {
      switch(toConversion)
      {
        case allUnits.Area[0]:
          result = parseFloat(number * 2.47105381);
          break;
        case allUnits.Area[1]:
          result = parseFloat(number * 0.000001);
          break;
        case allUnits.Area[2]:
          result = parseFloat(number * 1000000000);
          break;
        case allUnits.Area[3]:
          result = parseInt(number);
          break;
        case allUnits.Area[4]:
          result = parseFloat(number * 0.001076391);
          break;
        case allUnits.Area[5]:
          result = parseFloat(number * 0.15500031);
          break;
        case allUnits.Area[6]:
          result = parseInt(number * 0.0001);
          break;
      }
      return result;
    }
    else if(index == 4)
    {
      switch(toConversion)
      {
        case allUnits.Area[0]:
          result = parseFloat(number * 0.0000229568);
          break;
        case allUnits.Area[1]:
          result = parseFloat(number * 0.0009290304);
          break;
        case allUnits.Area[2]:
          result = parseFloat(number * 0.0000092903);
          break;
        case allUnits.Area[3]:
          result = parseFloat(number * 929.0304);
          break;
        case allUnits.Area[4]:
          result = parseFloat(number);
          break;
        case allUnits.Area[5]:
          result = parseInt(number * 144);
          break;
        case allUnits.Area[6]:
          result = parseFloat(number * 0.09290304);
          break;
      }
      return result;
    }
    else if(index == 5)
    {
      switch(toConversion)
      {
        case allUnits.Area[0]:
          result = parseFloat(number * 1059422508);
          break;
        case allUnits.Area[1]:
          result = parseFloat(number * 0.0000064516);
          break;
        case allUnits.Area[2]:
          result = parseFloat(number * 6.45160000);
          break;
        case allUnits.Area[3]:
          result = parseFloat(number * 6.4516);
          break;
        case allUnits.Area[4]:
          result = parseFloat(number * 0.0069444444);
          break;
        case allUnits.Area[5]:
          result = parseInt(number);
          break;
        case allUnits.Area[6]:
          result = parseFloat(number * 0.00064516);
          break;
      }
      return result;
    }
    else if(index == 6)
    {
      switch(toConversion)
      {
        case allUnits.Area[0]:
          result = parseFloat(number * 0.0002471054);
          break;
        case allUnits.Area[1]:
          result = parseFloat(number * 0.01);
          break;
        case allUnits.Area[2]:
          result = parseFloat(number * 0.0001);
          break;
        case allUnits.Area[3]:
          result = parseInt(number * 10000);
          break;
        case allUnits.Area[4]:
          result = parseFloat(number * 10.76391041671);
          break;
        case allUnits.Area[5]:
          result = parseFloat(number * 6200.0124000248);
          break;
        case allUnits.Area[6]:
          result = parseInt(number * 4);
          break;
      }
      return result;
    }
  }
  else if(globalConversion == "Length")
  {
    let index = allUnits.Length.indexOf(fromConversion)
    if(index == 0)
    {
      switch(toConversion)
      {
        case allUnits.Length[0]:
          result = number;
          break;
        case allUnits.Length[1]:
          result = parseFloat(number * 0.1);
          break;
        case allUnits.Length[2]:
          result = parseFloat(number * 0.001);
          break;
        case allUnits.Length[3]:
          result = parseFloat(number * 0.000001);
          break;
        case allUnits.Length[4]:
          result = parseFloat(number * 0.0393700787);
          break;
        case allUnits.Length[5]:
          result = parseFloat(number * 0.0032808399);
          break;
        case allUnits.Length[6]:
          result = parseFloat(number * 0.0010936133);
          break;
        case allUnits.Length[7]:
          result = parseFloat(number * 6.2131192);
          break;
        case allUnits.Length[8]:
          result = parseFloat(number * 5.39956803);
          break;
        case allUnits.Length[9]:
          result = parseFloat(number * 39.3700787402);
          break;
      }
      return result;
    }
    else if(index == 1)
    {
      switch(toConversion)
      {
        case allUnits.Length[0]:
          result = parseInt(number * 10);
          break;
        case allUnits.Length[1]:
          result = number;
          break;
        case allUnits.Length[2]:
          result = parseFloat(number * 0.01);
          break;
        case allUnits.Length[3]:
          result = parseFloat(number * 0.00001);
          break;
        case allUnits.Length[4]:
          result = parseFloat(number * 0.3937007874);
          break;
        case allUnits.Length[5]:
          result = parseFloat(number * 0.032808399);
          break;
        case allUnits.Length[6]:
          result = parseFloat(number * 0.010936133);
          break;
        case allUnits.Length[7]:
          result = parseFloat(number * 0.0000062137);
          break;
        case allUnits.Length[8]:
          result = parseFloat(number * 0.0000053996);
          break;
        case allUnits.Length[9]:
          result = parseFloat(number * 393.7007874016);
          break;
      }
      return result;
    }
    else if(index == 2)
    {
      switch(toConversion)
      {
        case allUnits.Length[0]:
          result = parseInt(number * 1000);
          break;
        case allUnits.Length[1]:
          result = parseInt(number * 100);
          break;
        case allUnits.Length[2]:
          result = number;
          break;
        case allUnits.Length[3]:
          result = parseFloat(number * 0.001);
          break;
        case allUnits.Length[4]:
          result = parseFloat(number * 39.3700787402);
          break;
        case allUnits.Length[5]:
          result = parseFloat(number * 3.280839895);
          break;
        case allUnits.Length[6]:
          result = parseFloat(number * 1.0936132983);
          break;
        case allUnits.Length[7]:
          result = parseFloat(number * 0.0006213712);
          break;
        case allUnits.Length[8]:
          result = parseFloat(number * 0.0005399568);
          break;
        case allUnits.Length[9]:
          result = parseFloat(number * 39370.078740157);
          break;
      }
      return result;
    }
    else if(index == 3)
    {
      switch(toConversion)
      {
        case allUnits.Length[0]:
          result = parseInt(number * 1000000);
          break;
        case allUnits.Length[1]:
          result = parseInt(number * 100000);
          break;
        case allUnits.Length[2]:
          result = parseInt(number * 1000);
          break;
        case allUnits.Length[3]:
          result = number;
          break;
        case allUnits.Length[4]:
          result = parseFloat(number * 39370.078740157);
          break;
        case allUnits.Length[5]:
          result = parseFloat(number * 3280.8398950131);
          break;
        case allUnits.Length[6]:
          result = parseFloat(number * 1093.6132983377);
          break;
        case allUnits.Length[7]:
          result = parseFloat(number * 0.6213711922);
          break;
        case allUnits.Length[8]:
          result = parseFloat(number * 0.5399568035);
          break;
        case allUnits.Length[9]:
          result = parseFloat(number * 39370078.740157);
          break;
      }
      return result;
    }
    else if(index == 4)
    {
      switch(toConversion)
      {
        case allUnits.Length[0]:
          result = parseFloat(number * 25.4);
          break;
        case allUnits.Length[1]:
          result = parseFloat(number * 2.54);
          break;
        case allUnits.Length[2]:
          result = parseFloat(number * 0.0254);
          break;
        case allUnits.Length[3]:
          result = parseFloat(number * 0.0000254);
          break;
        case allUnits.Length[4]:
          result = number;
          break;
        case allUnits.Length[5]:
          result = parseFloat(number * 0.0833333333);
          break;
        case allUnits.Length[6]:
          result = parseFloat(number * 0.0277777778);
          break;
        case allUnits.Length[7]:
          result = parseFloat(number * 0.000157828);
          break;
        case allUnits.Length[8]:
          result = parseFloat(number * 0.0000137149);
          break;
        case allUnits.Length[9]:
          result = parseInt(number * 1000);
          break;
      }
      return result;
    }
    else if(index == 5)
    {
      switch(toConversion)
      {
        case allUnits.Length[0]:
          result = parseFloat(number * 304.8);
          break;
        case allUnits.Length[1]:
          result = parseFloat(number * 30.48);
          break;
        case allUnits.Length[2]:
          result = parseFloat(number * 0.3048);
          break;
        case allUnits.Length[3]:
          result = parseFloat(number * 0.0003048);
          break;
        case allUnits.Length[4]:
          result = parseInt(number * 12);
          break;
        case allUnits.Length[5]:
          result = number;
          break;
        case allUnits.Length[6]:
          result = parseFloat(number * 0.3333333333);
          break;
        case allUnits.Length[7]:
          result = parseFloat(number * 0.0001893939);
          break;
        case allUnits.Length[8]:
          result = parseFloat(number * 0.0001645788);
          break;
        case allUnits.Length[9]:
          result = parseInt(number * 12000);
          break;
      }
      return result;
    }
    else if(index == 6)
    {
      switch(toConversion)
      {
        case allUnits.Length[0]:
          result = parseFloat(number * 914.4);
          break;
        case allUnits.Length[1]:
          result = parseFloat(number * 91.44);
          break;
        case allUnits.Length[2]:
          result = parseFloat(number * 0.9144);
          break;
        case allUnits.Length[3]:
          result = parseFloat(number * 0.0009144);
          break;
        case allUnits.Length[4]:
          result = parseInt(number * 36);
          break;
        case allUnits.Length[5]:
          result = parseInt(number * 3);
          break;
        case allUnits.Length[6]:
          result = number;
          break;
        case allUnits.Length[7]:
          result = parseFloat(number * 0.0005681818);
          break;
        case allUnits.Length[8]:
          result = parseFloat(number * 0.0004937365);
          break;
        case allUnits.Length[9]:
          result = parseInt(number * 36000);
          break;
      }
      return result;
    }
    else if(index == 7)
    {
      switch(toConversion)
      {
        case allUnits.Length[0]:
          result = parseInt(number * 1609344);
          break;
        case allUnits.Length[1]:
          result = parseFloat(number * 160934.4);
          break;
        case allUnits.Length[2]:
          result = parseFloat(number * 1609.344);
          break;
        case allUnits.Length[3]:
          result = parseFloat(number * 1.609344);
          break;
        case allUnits.Length[4]:
          result = parseInt(number * 63360);
          break;
        case allUnits.Length[5]:
          result = parseInt(number * 5280);
          break;
        case allUnits.Length[6]:
          result = parseInt(number * 1760);
          break;
        case allUnits.Length[7]:
          result = number;
          break;
        case allUnits.Length[8]:
          result = parseFloat(number * 0.8689762419);
          break;
        case allUnits.Length[9]:
          result = parseInt(number * 633360000);
          break;
      }
      return result;
    }
    else if(index == 8)
    {
      switch(toConversion)
      {
        case allUnits.Length[0]:
          result = parseInt(number * 1852000);
          break;
        case allUnits.Length[1]:
          result = parseInt(number * 185200);
          break;
        case allUnits.Length[2]:
          result = parseInt(number * 1852);
          break;
        case allUnits.Length[3]:
          result = parseFloat(number * 1.852);
          break;
        case allUnits.Length[4]:
          result = parseFloat(number * 72913.385826772);
          break;
        case allUnits.Length[5]:
          result = parseFloat(number * 6076.1154855643);
          break;
        case allUnits.Length[6]:
          result = parseFloat(number * 2025.3718285214);
          break;
        case allUnits.Length[7]:
          result = parseFloat(number * 1.150779448);
          break;
        case allUnits.Length[8]:
          result = number;
          break;
        case allUnits.Length[9]:
          result = parseFloat(number * 72913385.826772);
          break;
      }
      return result;
    }
    else if(index == 9)
    {
      switch(toConversion)
      {
        case allUnits.Length[0]:
          result = parseFloat(number * 0.0254);
          break;
        case allUnits.Length[1]:
          result = parseFloat(number * 0.00254);
          break;
        case allUnits.Length[2]:
          result = parseFloat(number * 0.0000254);
          break;
        case allUnits.Length[3]:
          result = parseFloat(number * 2.54000000000);
          break;
        case allUnits.Length[4]:
          result = parseFloat(number * 0.001);
          break;
        case allUnits.Length[5]:
          result = parseFloat(number * 0.0000833333);
          break;
        case allUnits.Length[6]:
          result = parseFloat(number * 0.0000277778);
          break;
        case allUnits.Length[7]:
          result = parseFloat(number * 1.57828283000);
          break;
        case allUnits.Length[8]:
          result = parseFloat(number * 1.37149028);
          break;
        case allUnits.Length[9]:
          result = number;
          break;
      }
      return result;
    }
  }
  else if(globalConversion == "Temperature")
  {
    let index = allUnits.Temperature.indexOf(fromConversion)
    if(index == 0)
    {
      switch(toConversion)
      {
        case allUnits.Temperature[0]:
          result = number;
          break;
        case allUnits.Temperature[1]:
          result = parseFloat(number * 33.8);
          break;
        case allUnits.Temperature[2]:
          result = parseFloat(number * 274.15);
          break;
      }
      return result;
    }
    else if(index == 1)
    {
      switch(toConversion)
      {
        case allUnits.Temperature[0]:
          result = parseFloat(number * (-17.2222222222));
          break;
        case allUnits.Temperature[1]:
          result = number;
          break;
        case allUnits.Temperature[2]:
          result = parseFloat(number * 255.9277777778);
          break;
      }
      return result;
    }
    else if(index == 2)
    {
      switch(toConversion)
      {
        case allUnits.Temperature[0]:
          result = parseFloat(number * (-272.15));
          break;
        case allUnits.Temperature[1]:
          result = parseFloat(number * (-457.87));
          break;
        case allUnits.Temperature[2]:
          result = number;
          break;
      }
      return result;
    }
  }
  else if(globalConversion == "Volume")
  {
    let index = allUnits.Volume.indexOf(fromConversion)
    if(index == 0)
    {
      switch(toConversion)
      {
        case allUnits.Volume[0]:
          result = number;
          break;
        case allUnits.Volume[1]:
          result = parseFloat(number * 1.2009499255);
          break;
        case allUnits.Volume[2]:
          result = parseFloat(number * 4.54609);
          break;
        case allUnits.Volume[3]:
          result = parseFloat(number * 4546.09);
          break;
        case allUnits.Volume[4]:
          result = parseFloat(number * 4546.09);
          break;
        case allUnits.Volume[5]:
          result = parseFloat(number * 0.00454609);
          break;
        case allUnits.Volume[6]:
          result = parseFloat(number * 277.4194327916);
          break;
        case allUnits.Volume[7]:
          result = parseFloat(number * 0.1605436532);
          break;
      }
      return result;
    }
    else if(index == 1)
    {
      switch(toConversion)
      {
        case allUnits.Volume[0]:
          result = parseFloat(number * 0.8326741846);
          break;
        case allUnits.Volume[1]:
          result = number;
          break;
        case allUnits.Volume[2]:
          result = parseFloat(number * 3.785411784);
          break;
        case allUnits.Volume[3]:
          result = parseFloat(number * 3785.411784);
          break;
        case allUnits.Volume[4]:
          result = parseFloat(number * 3785.411784);
          break;
        case allUnits.Volume[5]:
          result = parseFloat(number * 0.0037854118);
          break;
        case allUnits.Volume[6]:
          result = parseInt(number * 231);
          break;
        case allUnits.Volume[7]:
          result = parseFloat(number * 0.1336805556);
          break;
      }
      return result;
    }
    else if(index == 2)
    {
      switch(toConversion)
      {
        case allUnits.Volume[0]:
          result = parseFloat(number * 0.2199692483);
          break;
        case allUnits.Volume[1]:
          result = parseFloat(number * 0.2641720524);
          break;
        case allUnits.Volume[2]:
          result = number;
          break;
        case allUnits.Volume[3]:
          result = parseInt(number * 1000);
          break;
        case allUnits.Volume[4]:
          result = parseInt(number * 1000);
          break;
        case allUnits.Volume[5]:
          result = parseFloat(number * 0.001);
          break;
        case allUnits.Volume[6]:
          result = parseFloat(number * 61.0237440947);
          break;
        case allUnits.Volume[7]:
          result = parseFloat(number * 0.0353146667);
          break;
      }
      return result;
    }
    else if(index == 3)
    {
      switch(toConversion)
      {
        case allUnits.Volume[0]:
          result = parseFloat(number * 0.0002199692);
          break;
        case allUnits.Volume[1]:
          result = parseInt(number * 0.0002641721);
          break;
        case allUnits.Volume[2]:
          result = parseFloat(number * 0.001);
          break;
        case allUnits.Volume[3]:
          result = number;
          break;
        case allUnits.Volume[4]:
          result = parseInt(number * 1);
          break;
        case allUnits.Volume[5]:
          result = parseFloat(number * 0.000001);
          break;
        case allUnits.Volume[6]:
          result = parseFloat(number * 0.0610237441);
          break;
        case allUnits.Volume[7]:
          result = parseFloat(number * 0.0000353147);
          break;
      }
      return result;
    }
    else if(index == 4)
    {
      switch(toConversion)
      {
        case allUnits.Volume[0]:
          result = parseFloat(number * 0.0002199692);
          break;
        case allUnits.Volume[1]:
          result = parseFloat(number * 0.0002641721);
          break;
        case allUnits.Volume[2]:
          result = parseFloat(number * 0.001);
          break;
        case allUnits.Volume[3]:
          result = parseInt(number * 1);
          break;
        case allUnits.Volume[4]:
          result = number;
          break;
        case allUnits.Volume[5]:
          result = parseFloat(number * 0.000001);
          break;
        case allUnits.Volume[6]:
          result = parseFloat(number * 0.0610237441);
          break;
        case allUnits.Volume[7]:
          result = parseFloat(number * 0.0000353147);
          break;
      }
      return result;
    }
    else if(index == 5)
    {
      switch(toConversion)
      {
        case allUnits.Volume[0]:
          result = parseFloat(number * 219.9692482991);
          break;
        case allUnits.Volume[1]:
          result = parseFloat(number * 264.1720523581);
          break;
        case allUnits.Volume[2]:
          result = parseInt(number * 1000);
          break;
        case allUnits.Volume[3]:
          result = parseInt(number * 1000000);
          break;
        case allUnits.Volume[4]:
          result = parseInt(number * 1000000);
          break;
        case allUnits.Volume[5]:
          result = number;
          break;
        case allUnits.Volume[6]:
          result = parseFloat(number * 61023.744094732);
          break;
        case allUnits.Volume[7]:
          result = parseFloat(number * 35.3146667215);
          break;
      }
      return result;
    }
    else if(index == 6)
    {
      switch(toConversion)
      {
        case allUnits.Volume[0]:
          result = parseFloat(number * 0.0036046501);
          break;
        case allUnits.Volume[1]:
          result = parseFloat(number * 0.0043290043);
          break;
        case allUnits.Volume[2]:
          result = parseFloat(number * 0.016387064);
          break;
        case allUnits.Volume[3]:
          result = parseFloat(number * 16.387064);
          break;
        case allUnits.Volume[4]:
          result = parseFloat(number * 16.387064);
          break;
        case allUnits.Volume[5]:
          result = parseFloat(number * 0.000163871);
          break;
        case allUnits.Volume[6]:
          result = number;
          break;
        case allUnits.Volume[7]:
          result = parseFloat(number * 0.0005787037);
          break;
      }
      return result;
    }
    else if(index == 7)
    {
      switch(toConversion)
      {
        case allUnits.Volume[0]:
          result = parseFloat(number * 6.228835459);
          break;
        case allUnits.Volume[1]:
          result = parseFloat(number * 7.4805194805);
          break;
        case allUnits.Volume[2]:
          result = parseFloat(number * 28.316846592);
          break;
        case allUnits.Volume[3]:
          result = parseFloat(number * 28316.846592);
          break;
        case allUnits.Volume[4]:
          result = parseFloat(number * 28316.846592);
          break;
        case allUnits.Volume[5]:
          result = parseFloat(number * 0.0283168466);
          break;
        case allUnits.Volume[6]:
          result = parseInt(number * 1728);
          break;
        case allUnits.Volume[7]:
          result = number;
          break;
      }
      return result;
    }
  }
  else if(globalConversion == "Mass")
  {
    let index = allUnits.Mass.indexOf(fromConversion)
    if(index == 0)
    {
      switch(toConversion)
      {
        case allUnits.Mass[0]:
          result = number;
          break;
        case allUnits.Mass[1]:
          result = parseFloat(number * 0.9842065276);
          break;
        case allUnits.Mass[2]:
          result = parseFloat(number * 1.1023113109);
          break;
        case allUnits.Mass[3]:
          result = parseFloat(number * 2204.6226218488);
          break;
        case allUnits.Mass[4]:
          result = parseFloat(number * 35273.96194958);
          break;
        case allUnits.Mass[5]:
          result = parseInt(number * 1000);
          break;
        case allUnits.Mass[6]:
          result = parseInt(number * 1000000);
          break;
      }
      return result;
    }
    else if(index == 1)
    {
      switch(toConversion)
      {
        case allUnits.Mass[0]:
          result = parseFloat(number * 1.0160469088);
          break;
        case allUnits.Mass[1]:
          result = number;
          break;
        case allUnits.Mass[2]:
          result = parseFloat(number * 1.12);
          break;
        case allUnits.Mass[3]:
          result = parseInt(number * 2240);
          break;
        case allUnits.Mass[4]:
          result = parseInt(number * 35840);
          break;
        case allUnits.Mass[5]:
          result = parseFloat(number * 1016.0469088);
          break;
        case allUnits.Mass[6]:
          result = parseFloat(number * 1016046.9088);
          break;
      }
      return result;
    }
    else if(index == 2)
    {
      switch(toConversion)
      {
        case allUnits.Mass[0]:
          result = parseFloat(number * 0.90718474);
          break;
        case allUnits.Mass[1]:
          result = parseFloat(number * 0.8928571429);
          break;
        case allUnits.Mass[2]:
          result = number;
          break;
        case allUnits.Mass[3]:
          result = parseInt(number * 2000);
          break;
        case allUnits.Mass[4]:
          result = parseInt(number * 32000);
          break;
        case allUnits.Mass[5]:
          result = parseFloat(number * 907.18474);
          break;
        case allUnits.Mass[6]:
          result = parseFloat(number * 907184.74);
          break;
      }
      return result;
    }
    else if(index == 3)
    {
      switch(toConversion)
      {
        case allUnits.Mass[0]:
          result = parseFloat(number * 0.0004535924);
          break;
        case allUnits.Mass[1]:
          result = parseInt(number * 0.0004464286);
          break;
        case allUnits.Mass[2]:
          result = parseFloat(number * 0.0005);
          break;
        case allUnits.Mass[3]:
          result = number;
          break;
        case allUnits.Mass[4]:
          result = parseInt(number * 16);
          break;
        case allUnits.Mass[5]:
          result = parseFloat(number * 0.45359237);
          break;
        case allUnits.Mass[6]:
          result = parseFloat(number * 453.59237);
          break;
      }
      return result;
    }
    else if(index == 4)
    {
      switch(toConversion)
      {
        case allUnits.Mass[0]:
          result = parseFloat(number * 0.0000283495);
          break;
        case allUnits.Mass[1]:
          result = parseFloat(number * 0.0000279018);
          break;
        case allUnits.Mass[2]:
          result = parseFloat(number * 0.00003125);
          break;
        case allUnits.Mass[3]:
          result = parseFloat(number * 0.0625);
          break;
        case allUnits.Mass[4]:
          result = number;
          break;
        case allUnits.Mass[5]:
          result = parseFloat(number * 0.0283495231);
          break;
        case allUnits.Mass[6]:
          result = parseFloat(number * 28.349523125);
          break;
      }
      return result;
    }
    else if(index == 5)
    {
      switch(toConversion)
      {
        case allUnits.Mass[0]:
          result = parseFloat(number * 0.001);
          break;
        case allUnits.Mass[1]:
          result = parseFloat(number * 0.0009842065);
          break;
        case allUnits.Mass[2]:
          result = parseFloat(number * 0.0011023113);
          break;
        case allUnits.Mass[3]:
          result = parseFloat(number * 2.2046226218);
          break;
        case allUnits.Mass[4]:
          result = parseFloat(number * 35.2739619496);
          break;
        case allUnits.Mass[5]:
          result = number;
          break;
        case allUnits.Mass[6]:
          result = parseInt(number * 1000);
          break;
      }
      return result;
    }
    else if(index == 6)
    {
      switch(toConversion)
      {
        case allUnits.Mass[0]:
          result = parseFloat(number * 0.000001);
          break;
        case allUnits.Mass[1]:
          result = parseFloat(number * 9.84265280000);
          break;
        case allUnits.Mass[2]:
          result = parseFloat(number * 0.0000011023);
          break;
        case allUnits.Mass[3]:
          result = parseFloat(number * 0.0022046226);
          break;
        case allUnits.Mass[4]:
          result = parseFloat(number * 0.0352739619);
          break;
        case allUnits.Mass[5]:
          result = parseFloat(number * 0.001);
          break;
        case allUnits.Mass[6]:
          result = number;
          break;
      }
      return result;
    }
  }
  else if(globalConversion == "Data")
  {
    let index = allUnits.Data.indexOf(fromConversion)
    if(index == 0)
    {
      switch(toConversion)
      {
        case allUnits.Data[0]:
          result = number;
          break;
        case allUnits.Data[1]:
          result = parseFloat(number * 0.125);
          break;
        case allUnits.Data[2]:
          result = parseFloat(number * 0.001);
          break;
        case allUnits.Data[3]:
          result = parseFloat(number * 0.000125);
          break;
        case allUnits.Data[4]:
          result = parseFloat(number * 0.250000000000);
          break;
        case allUnits.Data[5]:
          result = parseFloat(number * 1.19209290000);
          break;
        case allUnits.Data[6]:
          result = parseFloat(number * 1.25000000000000);
          break;
        case allUnits.Data[7]:
          result = parseFloat(number * 1.1641532200000);
          break;
        case allUnits.Data[8]:
          result = parseFloat(number * 1.2500000000000);
          break;
        case allUnits.Data[9]:
          result = parseFloat(number * 1.13686838000000);
          break;
      }
      return result;
    }
    else if(index == 1)
    {
      switch(toConversion)
      {
        case allUnits.Data[0]:
          result = parseInt(number * 8);
          break;
        case allUnits.Data[1]:
          result = number;
          break;
        case allUnits.Data[2]:
          result = parseFloat(number * 0.001);
          break;
        case allUnits.Data[3]:
          result = parseFloat(number * 0.0009765625);
          break;
        case allUnits.Data[4]:
          result = parseFloat(number * 0.000001);
          break;
        case allUnits.Data[5]:
          result = parseFloat(number * 9.536743160000);
          break;
        case allUnits.Data[6]:
          result = parseFloat(number * 1.000000000000);
          break;
        case allUnits.Data[7]:
          result = parseFloat(number * 9.313225750000);
          break;
        case allUnits.Data[8]:
          result = parseFloat(number * 1.0000000000000);
          break;
        case allUnits.Data[9]:
          result = parseFloat(number * 9.094947020000);
          break;
      }
      return result;
    }
    else if(index == 2)
    {
      switch(toConversion)
      {
        case allUnits.Data[0]:
          result = parseInt(number * 8000);
          break;
        case allUnits.Data[1]:
          result = parseInt(number * 1000);
          break;
        case allUnits.Data[2]:
          result = number;
          break;
        case allUnits.Data[3]:
          result = parseFloat(number * 0.9765625);
          break;
        case allUnits.Data[4]:
          result = parseFloat(number * 0.001);
          break;
        case allUnits.Data[5]:
          result = parseFloat(number * 0.0009536743);
          break;
        case allUnits.Data[6]:
          result = parseFloat(number * 0.000001);
          break;
        case allUnits.Data[7]:
          result = parseFloat(number * 9.3132257500000);
          break;
        case allUnits.Data[8]:
          result = parseFloat(number * 1.000000000000);
          break;
        case allUnits.Data[9]:
          result = parseFloat(number * 9.094947020000);
          break;
      }
      return result;
    }
    else if(index == 3)
    {
      switch(toConversion)
      {
        case allUnits.Data[0]:
          result = parseInt(number * 8192);
          break;
        case allUnits.Data[1]:
          result = parseInt(number * 1024);
          break;
        case allUnits.Data[2]:
          result = parseInt(number * 1.024);
          break;
        case allUnits.Data[3]:
          result = number;
          break;
        case allUnits.Data[4]:
          result = parseFloat(number * 0.001024);
          break;
        case allUnits.Data[5]:
          result = parseFloat(number * 0.0009765625);
          break;
        case allUnits.Data[6]:
          result = parseFloat(number * 0.000001024);
          break;
        case allUnits.Data[7]:
          result = parseFloat(number * 9.53674316);
          break;
        case allUnits.Data[8]:
          result = parseFloat(number * 1.024000000000);
          break;
        case allUnits.Data[9]:
          result = parseFloat(number * 9.313225750000);
          break;
      }
      return result;
    }
    else if(index == 4)
    {
      switch(toConversion)
      {
        case allUnits.Data[0]:
          result = parseInt(number * 8000000);
          break;
        case allUnits.Data[1]:
          result = parseInt(number * 1000000);
          break;
        case allUnits.Data[2]:
          result = parseInt(number * 1000);
          break;
        case allUnits.Data[3]:
          result = parseFloat(number * 976.5625);
          break;
        case allUnits.Data[4]:
          result = number;
          break;
        case allUnits.Data[5]:
          result = parseFloat(number * 0.9536743164);
          break;
        case allUnits.Data[6]:
          result = parseFloat(number * 0.001);
          break;
        case allUnits.Data[7]:
          result = parseFloat(number * 0.0009313226);
          break;
        case allUnits.Data[8]:
          result = parseFloat(number * 0.000001);
          break;
        case allUnits.Data[9]:
          result = parseFloat(number * 9.094947020000);
          break;
      }
      return result;
    }
    else if(index == 5)
    {
      switch(toConversion)
      {
        case allUnits.Data[0]:
          result = parseInt(number * 8388608);
          break;
        case allUnits.Data[1]:
          result = parseInt(number * 1048576);
          break;
        case allUnits.Data[2]:
          result = parseFloat(number * 1048.576);
          break;
        case allUnits.Data[3]:
          result = parseInt(number * 1024);
          break;
        case allUnits.Data[4]:
          result = parseFloat(number * 1.048576);
          break;
        case allUnits.Data[5]:
          result = number;
          break;
        case allUnits.Data[6]:
          result = parseFloat(number * 0.0001048576);
          break;
        case allUnits.Data[7]:
          result = parseFloat(number * 0.0009765625);
          break;
        case allUnits.Data[8]:
          result = parseFloat(number * 0.0000010486);
          break;
        case allUnits.Data[9]:
          result = parseFloat(number * 9.536743160000);
          break;
      }
      return result;
    }
    else if(index == 6)
    {
      switch(toConversion)
      {
        case allUnits.Data[0]:
          result = parseInt(number * 8000000000);
          break;
        case allUnits.Data[1]:
          result = parseInt(number * 1000000000);
          break;
        case allUnits.Data[2]:
          result = parseInt(number * 1000000);
          break;
        case allUnits.Data[3]:
          result = parseFloat(number * 976562.5);
          break;
        case allUnits.Data[4]:
          result = parseInt(number * 1000);
          break;
        case allUnits.Data[5]:
          result = parseFloat(number * 953.6743164063);
          break;
        case allUnits.Data[6]:
          result = number;
          break;
        case allUnits.Data[7]:
          result = parseFloat(number * 0.9313225746);
          break;
        case allUnits.Data[8]:
          result = parseFloat(number * 0.001);
          break;
        case allUnits.Data[9]:
          result = parseFloat(number * 0.0009094947);
          break;
      }
      return result;
    }
    else if(index == 7)
    {
      switch(toConversion)
      {
        case allUnits.Data[0]:
          result = parseInt(number * 8589934592);
          break;
        case allUnits.Data[1]:
          result = parseInt(number * 1073741824);
          break;
        case allUnits.Data[2]:
          result = parseFloat(number * 1073741.824);
          break;
        case allUnits.Data[3]:
          result = parseInt(number * 1048576);
          break;
        case allUnits.Data[4]:
          result = parseFloat(number * 1073.741824);
          break;
        case allUnits.Data[5]:
          result = parseInt(number * 1024);
          break;
        case allUnits.Data[6]:
          result = parseFloat(number * 1.073741824);
          break;
        case allUnits.Data[7]:
          result = number;
          break;
        case allUnits.Data[8]:
          result = parseFloat(number * 0.0010737418);
          break;
        case allUnits.Data[9]:
          result = parseInt(number * 0.009765625);
          break;
      }
      return result;
    }
    else if(index == 8)
    {
      switch(toConversion)
      {
        case allUnits.Data[0]:
          result = parseInt(number * 8000000000000);
          break;
        case allUnits.Data[1]:
          result = parseInt(number * 1000000000000);
          break;
        case allUnits.Data[2]:
          result = parseInt(number * 1000000000);
          break;
        case allUnits.Data[3]:
          result = parseInt(number * 976562500);
          break;
        case allUnits.Data[4]:
          result = parseInt(number * 1000000);
          break;
        case allUnits.Data[5]:
          result = parseFloat(number * 953674.31640625);
          break;
        case allUnits.Data[6]:
          result = parseInt(number * 1000);
          break;
        case allUnits.Data[7]:
          result = parseFloat(number * 931.3225746155);
          break;
        case allUnits.Data[8]:
          result = number;
          break;
        case allUnits.Data[9]:
          result = parseFloat(number * 0.9094947018);
          break;
      }
      return result;
    }
    else if(index == 9)
    {
      switch(toConversion)
      {
        case allUnits.Data[0]:
          result = parseInt(number * 8796093022208);
          break;
        case allUnits.Data[1]:
          result = parseInt(number * 1099511627776);
          break;
        case allUnits.Data[2]:
          result = parseFloat(number * 1099511627.776);
          break;
        case allUnits.Data[3]:
          result = parseInt(number * 1073741824);
          break;
        case allUnits.Data[4]:
          result = parseFloat(number * 1099511.627776);
          break;
        case allUnits.Data[5]:
          result = parseFloat(number * 1048576);
          break;
        case allUnits.Data[6]:
          result = parseFloat(number * 1099.511627776);
          break;
        case allUnits.Data[7]:
          result = parseInt(number * 1024);
          break;
        case allUnits.Data[8]:
          result = parseFloat(number * 1.0995116278);
          break;
        case allUnits.Data[9]:
          result = number;
          break;
      }
      return result;
    }
  }
  else if(globalConversion == "Speed")
  {
    let index = allUnits.Speed.indexOf(fromConversion)
    if(index == 0)
    {
      switch(toConversion)
      {
        case allUnits.Speed[0]:
          result = number;
          break;
        case allUnits.Speed[1]:
          result = parseInt(number * 3600);
          break;
        case allUnits.Speed[2]:
          result = parseFloat(number * 0.001);
          break;
        case allUnits.Speed[3]:
          result = parseFloat(number * 3.6);
          break;
        case allUnits.Speed[4]:
          result = parseFloat(number * 39.3700787402);
          break;
        case allUnits.Speed[5]:
          result = parseFloat(number * 141732.28346457);
          break;
        case allUnits.Speed[6]:
          result = parseFloat(number * 3.280839895);
          break;
        case allUnits.Speed[7]:
          result = parseFloat(number * 11811.023622047);
          break;
        case allUnits.Speed[8]:
          result = parseFloat(number * 0.0006213712);
          break;
        case allUnits.Speed[9]:
          result = parseFloat(number * 2.2369362921);
          break;
        case allUnits.Speed[10]:
          result = parseFloat(number * 1.9438444924);
          break;
      }
      return result;
    }
    else if(index == 1)
    {
      switch(toConversion)
      {
        case allUnits.Speed[0]:
          result = parseInt(number * 0.0002777778);
          break;
        case allUnits.Speed[1]:
          result = number;
          break;
        case allUnits.Speed[2]:
          result = parseFloat(number * 2.7777777800000);
          break;
        case allUnits.Speed[3]:
          result = parseFloat(number * 0.001);
          break;
        case allUnits.Speed[4]:
          result = parseFloat(number * 0.010936133);
          break;
        case allUnits.Speed[5]:
          result = parseFloat(number * 39.3700787402);
          break;
        case allUnits.Speed[6]:
          result = parseFloat(number * 0.0009113444);
          break;
        case allUnits.Speed[7]:
          result = parseFloat(number *  3.280839895);
          break;
        case allUnits.Speed[8]:
          result = parseFloat(number * 1.7260310900000);
          break;
        case allUnits.Speed[9]:
          result = parseFloat(number * 0.0006213712);
          break;
        case allUnits.Speed[10]:
          result = parseFloat(number * 0.0005399568);
          break;
      }
      return result;
    }
    else if(index == 2)
    {
      switch(toConversion)
      {
        case allUnits.Speed[0]:
          result = parseInt(number * 1000);
          break;
        case allUnits.Speed[1]:
          result = parseInt(number * 3600000);
          break;
        case allUnits.Speed[2]:
          result = number;
          break;
        case allUnits.Speed[3]:
          result = parseInt(number * 3600);
          break;
        case allUnits.Speed[4]:
          result = parseFloat(number * 39370.078740157);
          break;
        case allUnits.Speed[5]:
          result = parseFloat(number * 141732283.46457);
          break;
        case allUnits.Speed[6]:
          result = parseFloat(number * 3280.8398950131);
          break;
        case allUnits.Speed[7]:
          result = parseFloat(number * 11811023.622047);
          break;
        case allUnits.Speed[8]:
          result = parseFloat(number * 0.6212711922);
          break;
        case allUnits.Speed[9]:
          result = parseFloat(number * 2236.936290544);
          break;
        case allUnits.Speed[10]:
          result = parseFloat(number * 1943.8444924406);
          break;
      }
      return result;
    }
    else if(index == 3)
    {
      switch(toConversion)
      {
        case allUnits.Speed[0]:
          result = parseFloat(number * 0.277777777800000);
          break;
        case allUnits.Speed[1]:
          result = parseInt(number * 1000);
          break;
        case allUnits.Speed[2]:
          result = parseFloat(number * 0.0002777778);
          break;
        case allUnits.Speed[3]:
          result = number;
          break;
        case allUnits.Speed[4]:
          result = parseFloat(number * 10.9361329834);
          break;
        case allUnits.Speed[5]:
          result = parseFloat(number * 39370.078740157);
          break;
        case allUnits.Speed[6]:
          result = parseFloat(number * 0.9113444153);
          break;
        case allUnits.Speed[7]:
          result = parseFloat(number * 3280.8398950131);
          break;
        case allUnits.Speed[8]:
          result = parseFloat(number * 0.0001726031);
          break;
        case allUnits.Speed[9]:
          result = parseFloat(number * 0.6213711922);
          break;
        case allUnits.Speed[10]:
          result = parseFloat(number * 0.5399568035);
          break;
      }
      return result;
    }
    else if(index == 4)
    {
      switch(toConversion)
      {
        case allUnits.Speed[0]:
          result = parseFloat(number * 0.0254);
          break;
        case allUnits.Speed[1]:
          result = parseFloat(number * 91.44);
          break;
        case allUnits.Speed[2]:
          result = parseFloat(number * 0.0000254);
          break;
        case allUnits.Speed[3]:
          result = parseFloat(number * 0.09144);
          break;
        case allUnits.Speed[4]:
          result = number;
          break;
        case allUnits.Speed[5]:
          result = parseInt(number * 3600);
          break;
        case allUnits.Speed[6]:
          result = parseFloat(number * 0.0833333333);
          break;
        case allUnits.Speed[7]:
          result = parseInt(number * 300);
          break;
        case allUnits.Speed[8]:
          result = parseFloat(number * 0.0000157828);
          break;
        case allUnits.Speed[9]:
          result = parseFloat(number * 0.0568181818);
          break;
        case allUnits.Speed[10]:
          result = parseFloat(number * 0.0493736501);
          break;
      }
      return result;
    }
    else if(index == 5)
    {
      switch(toConversion)
      {
        case allUnits.Speed[0]:
          result = parseFloat(number * 0.0000070556);
          break;
        case allUnits.Speed[1]:
          result = parseFloat(number * 0.0254);
          break;
        case allUnits.Speed[2]:
          result = parseFloat(number * 7.0555555555600000);
          break;
        case allUnits.Speed[3]:
          result = parseFloat(number * 0.0000254);
          break;
        case allUnits.Speed[4]:
          result = parseFloat(number * 0.0002777776);
          break;
        case allUnits.Speed[5]:
          result = number;
          break;
        case allUnits.Speed[6]:
          result = parseFloat(number * 0.0000231481);
          break;
        case allUnits.Speed[7]:
          result = parseFloat(number * 0.0833333333);
          break;
        case allUnits.Speed[8]:
          result = parseFloat(number * 4.384118970000);
          break;
        case allUnits.Speed[9]:
          result = parseFloat(number * 0.0000157828);
          break;
        case allUnits.Speed[10]:
          result = parseFloat(number * 0.0000137149);
          break;
      }
      return result;
    }
    else if(index == 6)
    {
      switch(toConversion)
      {
        case allUnits.Speed[0]:
          result = parseFloat(number * 0.3048);
          break;
        case allUnits.Speed[1]:
          result = parseFloat(number * 1097.28);
          break;
        case allUnits.Speed[2]:
          result = parseFloat(number * 0.0003048);
          break;
        case allUnits.Speed[3]:
          result = parseFloat(number * 1.09728);
          break;
        case allUnits.Speed[4]:
          result = parseInt(number * 12);
          break;
        case allUnits.Speed[5]:
          result = parseInt(number * 43200);
          break;
        case allUnits.Speed[6]:
          result = number;
          break;
        case allUnits.Speed[7]:
          result = parseInt(number * 3600);
          break;
        case allUnits.Speed[8]:
          result = parseFloat(number * 0.001893939);
          break;
        case allUnits.Speed[9]:
          result = parseFloat(number * 0.6818181818);
          break;
        case allUnits.Speed[10]:
          result = parseFloat(number * 0.5924838013);
          break;
      }
      return result;
    }
    else if(index == 7)
    {
      switch(toConversion)
      {
        case allUnits.Speed[0]:
          result = parseFloat(number * 0.0000846667);
          break;
        case allUnits.Speed[1]:
          result = parseFloat(number * 0.3048);
          break;
        case allUnits.Speed[2]:
          result = parseFloat(number * 8.46666667000);
          break;
        case allUnits.Speed[3]:
          result = parseFloat(number * 0.0003048);
          break;
        case allUnits.Speed[4]:
          result = parseFloat(number * 0.0033333333);
          break;
        case allUnits.Speed[5]:
          result = parseInt(number * 12);
          break;
        case allUnits.Speed[6]:
          result = parseFloat(number * 0.0002777778);
          break;
        case allUnits.Speed[7]:
          result = number;
          break;
        case allUnits.Speed[8]:
          result = parseFloat(number * 5.260942760000);
          break;
        case allUnits.Speed[9]:
          result = parseFloat(number * 0.0001893939);
          break;
        case allUnits.Speed[10]:
          result = parseFloat(number * 0.0001645788);
          break;
      }
      return result;
    }
    else if(index == 8)
    {
      switch(toConversion)
      {
        case allUnits.Speed[0]:
          result = parseFloat(number * 1609.344);
          break;
        case allUnits.Speed[1]:
          result = parseInt(number * 5793638.4);
          break;
        case allUnits.Speed[2]:
          result = parseFloat(number * 1.609344);
          break;  
        case allUnits.Speed[3]:
          result = parseFloat(number * 5793.6384);
          break;
        case allUnits.Speed[4]:
          result = parseInt(number * 63360);
          break;
        case allUnits.Speed[5]:
          result = parseInt(number * 228096000);
          break;
        case allUnits.Speed[6]:
          result = parseInt(number * 5280);
          break;
        case allUnits.Speed[7]:
          result = parseInt(number * 19008000);
          break;
        case allUnits.Speed[8]:
          result = number;
          break;
        case allUnits.Speed[9]:
          result = parseInt(number * 3600);
          break;
        case allUnits.Speed[10]:
          result = parseFloat(number * 3128.3144708423);
          break;
      }
      return result;
    }
    else if(index == 9)
    {
      switch(toConversion)
      {
        case allUnits.Speed[0]:
          result = parseFloat(number * 0.44704);
          break;
        case allUnits.Speed[1]:
          result = parseFloat(number * 1609.344);
          break;
        case allUnits.Speed[2]:
          result = parseFloat(number * 0.00044704);
          break;
        case allUnits.Speed[3]:
          result = parseFloat(number * 1.609344);
          break;
        case allUnits.Speed[4]:
          result = parseFloat(number * 17.6);
          break;
        case allUnits.Speed[5]:
          result = parseInt(number * 63360);
          break;
        case allUnits.Speed[6]:
          result = parseFloat(number * 1.4666666667);
          break;
        case allUnits.Speed[7]:
          result = parseInt(number * 5280);
          break;
        case allUnits.Speed[8]:
          result = parseFloat(number * 0.0002777778);
          break;
        case allUnits.Speed[9]:
          result = number;
          break;
        case allUnits.Speed[10]:
          result = parseFloat(number * 0.8689762419);
          break;
      }
      return result;
    }
    else if(index == 10)
    {
      switch(toConversion)
      {
        case allUnits.Speed[0]:
          result = parseFloat(number * 0.5144444444);
          break;
        case allUnits.Speed[1]:
          result = parseInt(number * 1852);
          break;
        case allUnits.Speed[2]:
          result = parseFloat(number * 0.0005144444);
          break;
        case allUnits.Speed[3]:
          result = parseFloat(number * 1.852);
          break;
        case allUnits.Speed[4]:
          result = parseFloat(number * 20.2537182852);
          break;
        case allUnits.Speed[5]:
          result = parseFloat(number * 72913.385826772);
          break;
        case allUnits.Speed[6]:
          result = parseFloat(number * 1.6878098571);
          break;
        case allUnits.Speed[7]:
          result = parseFloat(number * 6076.1154855643);
          break;
        case allUnits.Speed[8]:
          result = parseFloat(number * 0.000319661);
          break;
        case allUnits.Speed[9]:
          result = parseFloat(number * 1.150779448);
          break;
        case allUnits.Speed[10]:
          result = number;
          break;
      }
      return result;
    }
  }
  else if(globalConversion == "Time")
  {
    let index = allUnits.Time.indexOf(fromConversion)
    if(index == 0)
    {
      switch(toConversion)
      {
        case allUnits.Time[0]:
          result = number;
          break;
        case allUnits.Time[1]:
          result = parseFloat(number * 0.001);
          break;
        case allUnits.Time[2]:
          result = parseFloat(number * 0.0000166667);
          break;
        case allUnits.Time[3]:
          result = parseFloat(number * 2.777777777800000);
          break;
        case allUnits.Time[4]:
          result = parseFloat(number * 1.1574074180000000);
          break;
        case allUnits.Time[5]:
          result = parseFloat(number * 1.65343915900000);
          break;
      }
      return result;
    }
    else if(index == 1)
    {
      switch(toConversion)
      {
        case allUnits.Time[0]:
          result = parseInt(number * 1000);
          break;
        case allUnits.Time[1]:
          result = number;
          break;
        case allUnits.Time[2]:
          result = parseFloat(number * 0.0166666667);
          break;
        case allUnits.Time[3]:
          result = parseFloat(number * 0.0002777778);
          break;
        case allUnits.Time[4]:
          result = parseFloat(number * 0.0000115741);
          break;
        case allUnits.Time[5]:
          result = parseFloat(number * 0.0000016534);
          break;
      }
      return result;
    }
    else if(index == 2)
    {
      switch(toConversion)
      {
        case allUnits.Time[0]:
          result = parseInt(number * 60000);
          break;
        case allUnits.Time[1]:
          result = parseInt(number * 60);
          break;
        case allUnits.Time[2]:
          result = number;
          break;
        case allUnits.Time[3]:
          result = parseFloat(number * 0.0166666667);
          break;
        case allUnits.Time[4]:
          result = parseFloat(number * 0.0006944444);
          break;
        case allUnits.Time[5]:
          result = parseFloat(number * 0.0000992063);
          break;
      }
      return result;
    }
    else if(index == 3)
    {
      switch(toConversion)
      {
        case allUnits.Time[0]:
          result = parseInt(number * 360000);
          break;
        case allUnits.Time[1]:
          result = parseInt(number * 3600);
          break;
        case allUnits.Time[2]:
          result = parseFloat(number * 60);
          break;
        case allUnits.Time[3]:
          result = number;
          break;
        case allUnits.Time[4]:
          result = parseInt(number * 0.0416666667);
          break;
        case allUnits.Time[5]:
          result = parseFloat(number * 0.005952381);
          break;
      }
      return result;
    }
    else if(index == 4)
    {
      switch(toConversion)
      {
        case allUnits.Time[0]:
          result = parseInt(number * 86400000);
          break;
        case allUnits.Time[1]:
          result = parseInt(number * 86400);
          break;
        case allUnits.Time[2]:
          result = parseInt(number * 1440);
          break;
        case allUnits.Time[3]:
          result = parseInt(number * 24);
          break;
        case allUnits.Time[4]:
          result = number;
          break;
        case allUnits.Time[5]:
          result = parseFloat(number * 0.1428571429);
          break;
      }
      return result;
    }
    else if(index == 5)
    {
      switch(toConversion)
      {
        case allUnits.Time[0]:
          result = parseInt(number * 604800000);
          break;
        case allUnits.Time[1]:
          result = parseInt(number * 604800);
          break;
        case allUnits.Time[2]:
          result = parseInt(number * 10080);
          break;
        case allUnits.Time[3]:
          result = parseInt(number * 168);
          break;
        case allUnits.Time[4]:
          result = parseInt(number * 7);
          break;
        case allUnits.Time[5]:
          result = number;
          break;
      }
      return result;
    }
  }
}; 

let number = 0;
let topArrowFlag = 1;
let bottomArrowFlag = 0;

const firstNumberBox = document.getElementById("firstBoxValueDisplay");
const secondNumberBox = document.getElementById("secondBoxValueDisplay");
const topArrow = document.getElementById("topArrow");
const bottomArrow = document.getElementById("bottomArrow");

const handleNumberClick = (num) => {
  number = number * 10 + num;
  displayTheNumber(number);
};

let convertedResult;

const displayTheNumber = (number) => {
  if(topArrowFlag == 1)
  {
    firstNumberBox.innerHTML = number;
    const fromOptionC = document.getElementById('firstconvertSelection').value;
    const toOptionC = document.getElementById('secondconvertSelection').value;
    convertedResult = conversionSwitch(fromOptionC , toOptionC , number);
    displayInsecondBox(convertedResult);
  }
  else
  {
    secondNumberBox.innerHTML = number;
    const fromOptionC = document.getElementById('firstconvertSelection').value;
    const toOptionC = document.getElementById('secondconvertSelection').value;
    convertedResult = conversionSwitch(toOptionC , fromOptionC , number);
    displayInFirstBox(convertedResult);
  }
};

const displayInFirstBox = (numbers) => {
  firstNumberBox.innerHTML = numbers;
};

const displayInsecondBox = (numbers) => {
  secondNumberBox.innerHTML = numbers;
};

const firstUnit = document.getElementById('firstUnitDisplay');
const secondUnit = document.getElementById('secondUnitDisplay');
const toOption = document.getElementById('secondconvertSelection');
const fromOption = document.getElementById('firstconvertSelection');

const displayTheFirstUnit = () =>
{
  let index1 = allUnits[unitDisplayObjectValue].indexOf(fromOption.value);
  firstUnit.innerHTML = allUnitsSymbols[unitDisplayObjectValue][index1];
  displayTheNumber(number);
};

const displayTheSecondUnit = () =>
{
  let index2 = allUnits[unitDisplayObjectValue].indexOf(toOption.value);
  secondUnit.innerHTML = allUnitsSymbols[unitDisplayObjectValue][index2];
  displayTheNumber(number);
};

fromOption.addEventListener('change' , displayTheFirstUnit);
toOption.addEventListener('change' , displayTheSecondUnit);

topArrow.addEventListener('click', () => 
{
  topArrow.classList.replace("greenBlurSign" , "greenSign");
  if(bottomArrow.classList.contains("greenSign"))
  {
    bottomArrow.classList.replace("greenSign" , "greenBlurSign");
  }
  topArrowFlag = 1;
  bottomArrowFlag = 0;
  displayTheNumber(number);
});

bottomArrow.addEventListener('click', () => 
{
  bottomArrow.classList.replace("greenBlurSign" , "greenSign");
  if(topArrow.classList.contains("greenSign"))
  {
    topArrow.classList.replace("greenSign" , "greenBlurSign");
  }
  bottomArrowFlag = 1;
  topArrowFlag = 0;
  displayTheNumber(number);
});

const clear = document.getElementById('C');
clear.addEventListener('click' , () =>
{
  firstNumberBox.innerText = '';
  secondNumberBox.innerHTML = '';
  number = 0;
  displayTheNumber(0);
});

const idArray = ["Area" , "Length" ,"Temperature" ,"Volume" , "Mass" , "Data" , "Speed" ,"Time", "Tip"];

const firstDelelteOption = document.getElementById('firstconvertSelection');
const secondDeleteOption = document.getElementById('secondConvertSelection');
const option = document.getElementsByTagName('option');
let unitDisplayObjectValue;

const removeAndAddAllOptions = (objName , selectionAllUnitsValue) =>
{
  unitDisplayObjectValue = selectionAllUnitsValue;
  $(fromOption).find("option").remove().end();
  for (let i = 0; i < objName[selectionAllUnitsValue].length; i++) {
    const newOption = document.createElement('option');
    newOption.value = objName[selectionAllUnitsValue][i];
    newOption.textContent = objName[selectionAllUnitsValue][i];
    fromOption.appendChild(newOption);
  }
  $(toOption).find("option").remove().end();
  for (let i = 0; i < objName[selectionAllUnitsValue].length; i++) {
    const newOption = document.createElement('option');
    newOption.value = objName[selectionAllUnitsValue][i];
    newOption.textContent = objName[selectionAllUnitsValue][i];
    toOption.appendChild(newOption);
  }
  displayTheFirstUnit(objName , selectionAllUnitsValue);
  displayTheSecondUnit(objName , selectionAllUnitsValue);
};

const tipsContainer1 = document.getElementById('tipsContainer1');
const tipsContainer2 = document.getElementById('tipsContainer2');
const allConvertionsBox1 = document.getElementById('allConvertionsBox1');
const allConvertionsBox2 = document.getElementById('allConvertionsBox2');
const tipsModel = document.getElementById('modalBox');
const personModel = document.getElementById('personModalBox');

const changeOptionsInSelection = (objName , selectionAllUnitsValue) =>
{
  allConvertionsBox1.classList.remove("displayNone");
  allConvertionsBox2.classList.remove("displayNone");
  tipsContainer1.className = "displayNone";
  tipsContainer2.className = "displayNone";
  tipsModel.classList.add("displayNone");
  personModel.classList.add("displayNone");

  globalConversion = selectionAllUnitsValue;
  const changeColorForName = document.getElementById(selectionAllUnitsValue);
  changeColorForName.classList.add("convertselectionName");
  idArray.forEach(element => {
      if(element!=selectionAllUnitsValue)
      {
        let topElement = document.getElementById(element);
        if(topElement.classList.contains("convertselectionName"))
        {
          topElement.classList.remove("convertselectionName");
        }
      }
    }
  );
  removeAndAddAllOptions(objName , selectionAllUnitsValue);
};

for(let i=0;i<8;i++)
{
  document.getElementById(idArray[i]).addEventListener('click' , changeOptionsInSelection.bind(this,allUnits,idArray[i]));
};

const showTheTipsContainer = () =>
{
  allConvertionsBox1.classList.add("displayNone");
  allConvertionsBox2.classList.add("displayNone");
  tipsContainer1.classList.remove("displayNone");
  tipsContainer2.classList.remove("displayNone");
  // tipsModel.classList.remove("displayNone");
  personModel.classList.remove("displayNone");
};

document.getElementById(idArray[8]).addEventListener('click' , showTheTipsContainer);

// const percentageButton = document.getElementById('percentageButton');
// const percentageModal = document.getElementById('modalBox');


// const toggleVisibilityOfModalBox = () =>
// {
//   if(percentageModal.classList.contains("modalHide"))
//   {
//     percentageModal.classList.replace("modalHide" , "modalVisible");  
//   }
//   else
//   {
//     percentageModal.classList.replace("modalVisible" , "modalHide");
//   }
// };

// percentageButton.addEventListener('click' , toggleVisibilityOfModalBox);

// let selectedNumber;
// const showValueInButton = document.getElementById('percentageValue');
// const changeTheValueInButton = (value) =>
// {
//   showValueInButton.innerHTML = value;
//   displayTheTipsNumber(tipsNumber);
// }
// for(let i = 0;i<100;i++)
// {
//   selectedNumber = document.getElementById(`scrollNo${i}`);
//   selectedNumber.addEventListener('click',changeTheValueInButton.bind(this,i));
// }

// const cancelSelectionButton = document.getElementById('cancelSelection');
// const doneselectionButton = document.getElementById('doneSelection');

// cancelSelectionButton.addEventListener('click', toggleVisibilityOfModalBox);
// doneselectionButton.addEventListener('click', toggleVisibilityOfModalBox);

// const showUserNumberInTipsBox = document.getElementById('tipsEnteredValue'); 
// const showTipsAmount = document.getElementById('showTipsAmount');
// const showTotalAmount = document.getElementById('showAddedTotalAmount');
// let tipsNumber = 0;
// let tipsPercentage;
// let totalAmount;

// const calculateAndDisplayTheTipsAmount = (toCalculateTipsAmount) =>
// {
//   tipsPercentage = parseInt(showValueInButton.textContent);
//   tipsPercentage = tipsPercentage / 100;
//   if(tipsPercentage != 0)
//   {
//     let resultTipsAmount = (toCalculateTipsAmount * tipsPercentage).toFixed(2);
//     showTipsAmount.innerHTML = resultTipsAmount;
//     totalAmount = (parseInt(toCalculateTipsAmount) + parseFloat(resultTipsAmount)).toFixed(2);
//     showTotalAmount.innerHTML = totalAmount;
//   }
//   calculateForEachPerson();
// };

// const displayTheTipsNumber = (displayInTipsBoxNumber) =>
// {
//   showUserNumberInTipsBox.innerHTML = displayInTipsBoxNumber;
//   calculateAndDisplayTheTipsAmount(displayInTipsBoxNumber)
// };

// const handleTipsCalculationNumberClick = (tipsnum) =>
// {
//   tipsNumber = tipsNumber * 10 + tipsnum;
//   displayTheTipsNumber(tipsNumber);
// }; 

// let tipsEnabled = true;

for (let i = 0; i <= 9; i++) {
  document.getElementById(i.toString()).addEventListener("click", () => {
    // if(!tipsEnabled)
    handleNumberClick(i);
    // {
    //   handleNumberClick(i);
    // }
    // else
    // {
    //   handleTipsCalculationNumberClick(i);
    // }
  });
}



// const personselectionButton = document.getElementById('showAddedPersonInButton');
// const personModal = document.getElementById('personModalBox'); 


// const toggleVisibilityOfPersonModalBox = () =>
// {
//   if(personModal.classList.contains("modalHide"))
//   {
//     personModal.classList.replace("modalHide" , "modalVisible");  
//   }
//   else
//   {
//     personModal.classList.replace("modalVisible" , "modalHide");
//   }
// };

// personselectionButton.addEventListener('click' , toggleVisibilityOfPersonModalBox);
// const displayEachPersonAmount = document.getElementById('eachPersonAmount');
// let personCount;

// const calculateForEachPerson = () =>
// {
//   personCount = parseInt(personselectionButton.textContent);
//   let eachPersonAmount = totalAmount / personCount ;
//   displayEachPersonAmount.innerHTML = eachPersonAmount.toFixed(2);
// };

// let selectedPerson;
// const showValueInPersonButton = document.getElementById('personValue');
// const changeTheValueInPersonButton = (value) =>
// {
//   showValueInPersonButton.innerHTML = value;
//   calculateForEachPerson();
// }
// for(let i = 1;i<100;i++)
// {
//   selectedPerson = document.getElementById(`scrollPersonNo${i}`);
//   selectedPerson.addEventListener('click',changeTheValueInPersonButton.bind(this,i));
// }

// const cancelPersonSelectionButton = document.getElementById('cancelPersonSelection');
// const donePersonselectionButton = document.getElementById('donePersonSelection');

// cancelPersonSelectionButton.addEventListener('click', toggleVisibilityOfPersonModalBox);
// donePersonselectionButton.addEventListener('click', toggleVisibilityOfPersonModalBox);
