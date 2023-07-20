export const oldResponse = {
    "AdditionalData": {
      "HttpRoute": "/api/v1/bulkevaluate",
      "HttpQuery": "",
      "HttpMethod": "POST",
      "HttpEndpoint": "http://productprice.financialflows.cimpress.io/",
      "HttpDirection": "Incoming",
      "HttpHeaders": {
        "Connection": "keep-alive",
        "Content-Length": "54126",
        "Content-Type": "application/json",
        "Authorization": "Bearer  eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1qbENNemxCTnpneE1ETkJSVFpHTURFd09ETkRSalJGTlRSR04wTXpPRUpETnpORlFrUTROUSJ9.eyJodHRwczovL2NsYWltcy5jaW1wcmVzcy5pby90ZW5hbnRzIjpbIkRydWNrLmF0Il0sImh0dHBzOi8vY2xhaW1zLmNpbXByZXNzLmlvL2FjY291bnQiOiI3eG55TTNlVTF5VHNqTWllNFZUUlhtIiwiaHR0cHM6Ly9jbGFpbXMuY2ltcHJlc3MuaW8vY2ltcHJlc3NfaW50ZXJuYWwiOnRydWUsImh0dHBzOi8vY2xhaW1zLmNpbXByZXNzLmlvL2Nhbm9uaWNhbF9pZCI6ImRpQTlRWXRJN3pkdmlMZ2Z1c2s1N1dMQUlpUkVlT3k1QGNsaWVudHMiLCJpc3MiOiJodHRwczovL2NpbXByZXNzLmF1dGgwLmNvbS8iLCJzdWIiOiJkaUE5UVl0STd6ZHZpTGdmdXNrNTdXTEFJaVJFZU95NUBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9hcGkuY2ltcHJlc3MuaW8vIiwiaWF0IjoxNjg4NzE4ODA4LCJleHAiOjE2ODg4MDUyMDgsImF6cCI6ImRpQTlRWXRJN3pkdmlMZ2Z1c2s1N1dMQUlpUkVlT3k1IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.REDACTED",
        "Host": "productprice.financialflows.cimpress.io",
        "User-Agent": "GuzzleHttp/6.5.5 curl/7.68.0 PHP/7.3.33-11+ubuntu20.04.1+deb.sury.org+1",
        "X-Forwarded-For": "34.251.11.167",
        "X-Forwarded-Port": "443",
        "X-Forwarded-Proto": "https"
      },
      "HttpBody": {
        "seller": {
          "sellerType": "fulfillers",
          "sellerId": "aqvf30vtp"
        },
        "buyers": [
          {
            "buyerType": "merchants",
            "buyerId": "druck"
          }
        ],
        "mcpSku": "CIM-N1ZVPTQE",
        "evaluationParameters": {
          "defaultValues": [
            {
              "class": "destination",
              "attributeKey": "country",
              "attributeValue": "AT"
            },
            {
              "class": "destination",
              "attributeKey": "deliveryoption",
              "attributeValue": "Normal"
            }
          ],
          "iterations": [
            {
              "valueAttributes": [
                {
                  "attributeValue": "Yes",
                  "attributeKey": "AutoQuantity",
                  "class": "tenant"
                },
                {
                  "attributeValue": "A4",
                  "attributeKey": "Format",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Portrait",
                  "attributeKey": "PrintOrientation",
                  "class": "tenant"
                },
                {
                  "unitOfMeasure": "cm",
                  "attributeValue": "21",
                  "attributeKey": "CustomWidth",
                  "class": "tenant"
                },
                {
                  "unitOfMeasure": "cm",
                  "attributeValue": "29.7",
                  "attributeKey": "CustomHeight",
                  "class": "tenant"
                },
                {
                  "attributeValue": "170g Double Sided Coated Gloss Paper",
                  "attributeKey": "MaterialWithGrammage",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Double Sided Coated Gloss Paper",
                  "attributeKey": "Material",
                  "class": "tenant"
                },
                {
                  "attributeValue": "170",
                  "attributeKey": "Grammage",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "Folding",
                  "class": "tenant"
                },
                {
                  "attributeValue": "4/4 - CMYK/CMYK",
                  "attributeKey": "PrintColor",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "SpecialFinishing",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Offset",
                  "attributeKey": "PrintingProcess",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "Lamination",
                  "class": "tenant"
                },
                {
                  "attributeValue": "1",
                  "attributeKey": "DesignCount",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "Coating",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "Perforation",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "FoldingOrientation",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Rectangle",
                  "attributeKey": "CutShape",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "HolePunching",
                  "class": "tenant"
                },
                {
                  "attributeValue": "No",
                  "attributeKey": "Bundle",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "BundleCount",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "RoundedCorners",
                  "class": "tenant"
                },
                {
                  "attributeValue": "No",
                  "attributeKey": "RoundedLeftTopCorner",
                  "class": "tenant"
                },
                {
                  "attributeValue": "No",
                  "attributeKey": "RoundedRightTopCorner",
                  "class": "tenant"
                },
                {
                  "attributeValue": "No",
                  "attributeKey": "RoundedLeftBottomCorner",
                  "class": "tenant"
                },
                {
                  "attributeValue": "No",
                  "attributeKey": "RoundedRightBottomCorner",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "Fragrance",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Standard",
                  "attributeKey": "ProductionSpeed",
                  "class": "tenant"
                },
                {
                  "attributeValue": "ShortGrain",
                  "attributeKey": "Grain",
                  "class": "tenant"
                },
                {
                  "attributeValue": "(1050x750)",
                  "attributeKey": "PrintSheetFormat",
                  "class": "tenant"
                },
                {
                  "attributeValue": "26750",
                  "attributeKey": "OverallQuantity",
                  "class": "tenant"
                },
                {
                  "attributeValue": "No",
                  "attributeKey": "Outsourcer",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m65",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Yes",
                  "attributeKey": "PrintedAT",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_AR_OursourcerName",
                  "class": "tenant"
                },
                {
                  "attributeValue": "2",
                  "attributeKey": "kis_Lieferzeit_Liefertage_Max",
                  "class": "tenant"
                },
                {
                  "attributeValue": "2",
                  "attributeKey": "kis_Lieferzeit_Liefertage_Min",
                  "class": "tenant"
                },
                {
                  "attributeValue": "\\\\\\\\fileserver\\\\produktion\\\\Offsetdruck",
                  "attributeKey": "kis_AR_Preps_Transferordner_Pfad",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Offsetdruck",
                  "attributeKey": "kis_AR_Preps_Transferordner",
                  "class": "tenant"
                },
                {
                  "attributeValue": "1",
                  "attributeKey": "kis_shippingOverview_H2",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_shippingOverview_H1",
                  "class": "tenant"
                },
                {
                  "attributeValue": "dd",
                  "attributeKey": "Production Time Type",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "Saver Upscaling",
                  "class": "tenant"
                },
                {
                  "unitOfMeasure": "d",
                  "attributeValue": "0",
                  "attributeKey": "DailyQuota",
                  "class": "tenant"
                },
                {
                  "unitOfMeasure": "pcs",
                  "attributeValue": "2",
                  "attributeKey": "Production Time",
                  "class": "tenant"
                },
                {
                  "attributeValue": "8",
                  "attributeKey": "BBMounting",
                  "class": "tenant"
                },
                {
                  "attributeValue": "8",
                  "attributeKey": "SBMounting",
                  "class": "tenant"
                },
                {
                  "attributeValue": "2",
                  "attributeKey": "BBMountingHeightCalculation",
                  "class": "tenant"
                },
                {
                  "attributeValue": "4",
                  "attributeKey": "BBMountingWidthCalculation",
                  "class": "tenant"
                },
                {
                  "attributeValue": "2",
                  "attributeKey": "SBMountingHeightCalculation",
                  "class": "tenant"
                },
                {
                  "attributeValue": "4",
                  "attributeKey": "SBMountingWidthCalculation",
                  "class": "tenant"
                },
                {
                  "attributeValue": "71.1",
                  "attributeKey": "SBFormatHeightResult",
                  "class": "tenant"
                },
                {
                  "attributeValue": "102.6",
                  "attributeKey": "BBFormatWidthResult",
                  "class": "tenant"
                },
                {
                  "attributeValue": "102.6",
                  "attributeKey": "SBFormatWidthResult",
                  "class": "tenant"
                },
                {
                  "attributeValue": "71.1",
                  "attributeKey": "BBFormatHeightResult",
                  "class": "tenant"
                },
                {
                  "attributeValue": "KD82",
                  "attributeKey": "kis_AR_Preps_Materialcode_KEY",
                  "class": "tenant"
                },
                {
                  "attributeValue": "1",
                  "attributeKey": "kis_Z_m71",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m70",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m18",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m07",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m01",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m02",
                  "class": "tenant"
                },
                {
                  "attributeValue": "1",
                  "attributeKey": "kis_Z_b06",
                  "class": "tenant"
                },
                {
                  "attributeValue": "283627.575",
                  "attributeKey": "Shippable Pack Weight",
                  "class": "tenant"
                },
                {
                  "attributeValue": "10.6029",
                  "attributeKey": "Product Weight",
                  "class": "tenant"
                },
                {
                  "attributeValue": "https://readonly.uploads.documents.cimpress.io/v1/uploads/e0e86689-4579-4da2-a820-2064d1046c77~100?tenant=prepress-uploads",
                  "attributeKey": "Prepress Parameters URL",
                  "class": "document"
                },
                {
                  "attributeValue": "https://print.prepress.cimpress.io/v2/print-prep?asynchronous=true",
                  "attributeKey": "Prepress URL",
                  "class": "document"
                },
                {
                  "unitOfMeasure": "mm",
                  "attributeValue": "2",
                  "attributeKey": "Surface Bleed",
                  "class": "document"
                },
                {
                  "attributeValue": "Offset Or Digital",
                  "attributeKey": "Process Type Side 1",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Yes",
                  "attributeKey": "Enable Side 1",
                  "class": "tenant"
                },
                {
                  "attributeValue": "2",
                  "attributeKey": "Surface Safety",
                  "class": "tenant"
                },
                {
                  "attributeValue": "1",
                  "attributeKey": "Sets",
                  "class": "product"
                },
                {
                  "attributeValue": "21",
                  "attributeKey": "Trim Width",
                  "class": "product"
                },
                {
                  "attributeValue": "29.7",
                  "attributeKey": "Trim Height",
                  "class": "product"
                },
                {
                  "attributeValue": "https://fulfillmentscenarios.fi.cimpress.io/v1/scenarios:echo?fulfillerIds=aqvf30vtp&fulfillmentLocationIds=b3e09wqffj1",
                  "attributeKey": "Fulfillment Configuration",
                  "class": "fulfillment"
                },
                {
                  "attributeValue": "1000",
                  "attributeKey": "kis_AR_Kialkulationsschema",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Yes",
                  "attributeKey": "FSC",
                  "class": "tenant"
                },
                {
                  "attributeValue": "128",
                  "attributeKey": "Substrate Thickness",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Not Premium",
                  "attributeKey": "Premium",
                  "class": "tenant"
                },
                {
                  "attributeValue": "No",
                  "attributeKey": "Premium Material",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m163",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m162",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m161",
                  "class": "tenant"
                },
                {
                  "attributeValue": "170",
                  "attributeKey": "Grams",
                  "class": "tenant"
                },
                {
                  "attributeValue": "2",
                  "attributeKey": "kis_AR_Preps_4c_4c",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Offset Or Digital",
                  "attributeKey": "Process Type Side 2",
                  "class": "tenant"
                },
                {
                  "attributeValue": "CMYK",
                  "attributeKey": "Process Color Side 1",
                  "class": "product"
                },
                {
                  "attributeValue": "CMYK",
                  "attributeKey": "Process Color Side 2",
                  "class": "product"
                },
                {
                  "attributeValue": "Yes",
                  "attributeKey": "Enable Side 2",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m69",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m68",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m66",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m33",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m169",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m168",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "Lamination Weight",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m51",
                  "class": "tenant"
                },
                {
                  "attributeValue": "2",
                  "attributeKey": "kis_SWITCH_eco_mindays",
                  "class": "tenant"
                },
                {
                  "attributeValue": "15:45",
                  "attributeKey": "Production Deadline",
                  "class": "tenant"
                },
                {
                  "attributeValue": "15:30",
                  "attributeKey": "Setup Deadline",
                  "class": "tenant"
                },
                {
                  "attributeValue": "15:15",
                  "attributeKey": "Customer Care Deadline",
                  "class": "tenant"
                },
                {
                  "attributeValue": "15:00",
                  "attributeKey": "Customer Deadline",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m85",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m160",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m114",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_b04",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_b02",
                  "class": "tenant"
                },
                {
                  "attributeValue": "8",
                  "attributeKey": "kis_AR_Preps_nutzen_je_druckvorgang",
                  "class": "tenant"
                },
                {
                  "attributeValue": "3344",
                  "attributeKey": "kis_AR_Preps_Berechnete_Bogen",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m125",
                  "class": "tenant"
                },
                {
                  "attributeKey": "Quantity",
                  "attributeValue": "1000",
                  "class": "order"
                },
                {
                  "attributeKey": "mcpSku",
                  "attributeValue": "CIM-N1ZVPTQE",
                  "class": "order"
                }
              ]
            },
            {
              "valueAttributes": [
                {
                  "attributeValue": "Yes",
                  "attributeKey": "AutoQuantity",
                  "class": "tenant"
                },
                {
                  "attributeValue": "A4",
                  "attributeKey": "Format",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Portrait",
                  "attributeKey": "PrintOrientation",
                  "class": "tenant"
                },
                {
                  "unitOfMeasure": "cm",
                  "attributeValue": "21",
                  "attributeKey": "CustomWidth",
                  "class": "tenant"
                },
                {
                  "unitOfMeasure": "cm",
                  "attributeValue": "29.7",
                  "attributeKey": "CustomHeight",
                  "class": "tenant"
                },
                {
                  "attributeValue": "170g Double Sided Coated Gloss Paper",
                  "attributeKey": "MaterialWithGrammage",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Double Sided Coated Gloss Paper",
                  "attributeKey": "Material",
                  "class": "tenant"
                },
                {
                  "attributeValue": "170",
                  "attributeKey": "Grammage",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "Folding",
                  "class": "tenant"
                },
                {
                  "attributeValue": "4/4 - CMYK/CMYK",
                  "attributeKey": "PrintColor",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "SpecialFinishing",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Offset",
                  "attributeKey": "PrintingProcess",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "Lamination",
                  "class": "tenant"
                },
                {
                  "attributeValue": "1",
                  "attributeKey": "DesignCount",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "Coating",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "Perforation",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "FoldingOrientation",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Rectangle",
                  "attributeKey": "CutShape",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "HolePunching",
                  "class": "tenant"
                },
                {
                  "attributeValue": "No",
                  "attributeKey": "Bundle",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "BundleCount",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "RoundedCorners",
                  "class": "tenant"
                },
                {
                  "attributeValue": "No",
                  "attributeKey": "RoundedLeftTopCorner",
                  "class": "tenant"
                },
                {
                  "attributeValue": "No",
                  "attributeKey": "RoundedRightTopCorner",
                  "class": "tenant"
                },
                {
                  "attributeValue": "No",
                  "attributeKey": "RoundedLeftBottomCorner",
                  "class": "tenant"
                },
                {
                  "attributeValue": "No",
                  "attributeKey": "RoundedRightBottomCorner",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "Fragrance",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Standard",
                  "attributeKey": "ProductionSpeed",
                  "class": "tenant"
                },
                {
                  "attributeValue": "ShortGrain",
                  "attributeKey": "Grain",
                  "class": "tenant"
                },
                {
                  "attributeValue": "(1050x750)",
                  "attributeKey": "PrintSheetFormat",
                  "class": "tenant"
                },
                {
                  "attributeValue": "26750",
                  "attributeKey": "OverallQuantity",
                  "class": "tenant"
                },
                {
                  "attributeValue": "No",
                  "attributeKey": "Outsourcer",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m65",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Yes",
                  "attributeKey": "PrintedAT",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_AR_OursourcerName",
                  "class": "tenant"
                },
                {
                  "attributeValue": "2",
                  "attributeKey": "kis_Lieferzeit_Liefertage_Max",
                  "class": "tenant"
                },
                {
                  "attributeValue": "2",
                  "attributeKey": "kis_Lieferzeit_Liefertage_Min",
                  "class": "tenant"
                },
                {
                  "attributeValue": "\\\\\\\\fileserver\\\\produktion\\\\Offsetdruck",
                  "attributeKey": "kis_AR_Preps_Transferordner_Pfad",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Offsetdruck",
                  "attributeKey": "kis_AR_Preps_Transferordner",
                  "class": "tenant"
                },
                {
                  "attributeValue": "1",
                  "attributeKey": "kis_shippingOverview_H2",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_shippingOverview_H1",
                  "class": "tenant"
                },
                {
                  "attributeValue": "dd",
                  "attributeKey": "Production Time Type",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "Saver Upscaling",
                  "class": "tenant"
                },
                {
                  "unitOfMeasure": "d",
                  "attributeValue": "0",
                  "attributeKey": "DailyQuota",
                  "class": "tenant"
                },
                {
                  "unitOfMeasure": "pcs",
                  "attributeValue": "2",
                  "attributeKey": "Production Time",
                  "class": "tenant"
                },
                {
                  "attributeValue": "8",
                  "attributeKey": "BBMounting",
                  "class": "tenant"
                },
                {
                  "attributeValue": "8",
                  "attributeKey": "SBMounting",
                  "class": "tenant"
                },
                {
                  "attributeValue": "2",
                  "attributeKey": "BBMountingHeightCalculation",
                  "class": "tenant"
                },
                {
                  "attributeValue": "4",
                  "attributeKey": "BBMountingWidthCalculation",
                  "class": "tenant"
                },
                {
                  "attributeValue": "2",
                  "attributeKey": "SBMountingHeightCalculation",
                  "class": "tenant"
                },
                {
                  "attributeValue": "4",
                  "attributeKey": "SBMountingWidthCalculation",
                  "class": "tenant"
                },
                {
                  "attributeValue": "71.1",
                  "attributeKey": "SBFormatHeightResult",
                  "class": "tenant"
                },
                {
                  "attributeValue": "102.6",
                  "attributeKey": "BBFormatWidthResult",
                  "class": "tenant"
                },
                {
                  "attributeValue": "102.6",
                  "attributeKey": "SBFormatWidthResult",
                  "class": "tenant"
                },
                {
                  "attributeValue": "71.1",
                  "attributeKey": "BBFormatHeightResult",
                  "class": "tenant"
                },
                {
                  "attributeValue": "KD82",
                  "attributeKey": "kis_AR_Preps_Materialcode_KEY",
                  "class": "tenant"
                },
                {
                  "attributeValue": "1",
                  "attributeKey": "kis_Z_m71",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m70",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m18",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m07",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m01",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m02",
                  "class": "tenant"
                },
                {
                  "attributeValue": "1",
                  "attributeKey": "kis_Z_b06",
                  "class": "tenant"
                },
                {
                  "attributeValue": "283627.575",
                  "attributeKey": "Shippable Pack Weight",
                  "class": "tenant"
                },
                {
                  "attributeValue": "10.6029",
                  "attributeKey": "Product Weight",
                  "class": "tenant"
                },
                {
                  "attributeValue": "https://readonly.uploads.documents.cimpress.io/v1/uploads/e0e86689-4579-4da2-a820-2064d1046c77~100?tenant=prepress-uploads",
                  "attributeKey": "Prepress Parameters URL",
                  "class": "document"
                },
                {
                  "attributeValue": "https://print.prepress.cimpress.io/v2/print-prep?asynchronous=true",
                  "attributeKey": "Prepress URL",
                  "class": "document"
                },
                {
                  "unitOfMeasure": "mm",
                  "attributeValue": "2",
                  "attributeKey": "Surface Bleed",
                  "class": "document"
                },
                {
                  "attributeValue": "Offset Or Digital",
                  "attributeKey": "Process Type Side 1",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Yes",
                  "attributeKey": "Enable Side 1",
                  "class": "tenant"
                },
                {
                  "attributeValue": "2",
                  "attributeKey": "Surface Safety",
                  "class": "tenant"
                },
                {
                  "attributeValue": "1",
                  "attributeKey": "Sets",
                  "class": "product"
                },
                {
                  "attributeValue": "21",
                  "attributeKey": "Trim Width",
                  "class": "product"
                },
                {
                  "attributeValue": "29.7",
                  "attributeKey": "Trim Height",
                  "class": "product"
                },
                {
                  "attributeValue": "https://fulfillmentscenarios.fi.cimpress.io/v1/scenarios:echo?fulfillerIds=aqvf30vtp&fulfillmentLocationIds=b3e09wqffj1",
                  "attributeKey": "Fulfillment Configuration",
                  "class": "fulfillment"
                },
                {
                  "attributeValue": "1000",
                  "attributeKey": "kis_AR_Kialkulationsschema",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Yes",
                  "attributeKey": "FSC",
                  "class": "tenant"
                },
                {
                  "attributeValue": "128",
                  "attributeKey": "Substrate Thickness",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Not Premium",
                  "attributeKey": "Premium",
                  "class": "tenant"
                },
                {
                  "attributeValue": "No",
                  "attributeKey": "Premium Material",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m163",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m162",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m161",
                  "class": "tenant"
                },
                {
                  "attributeValue": "170",
                  "attributeKey": "Grams",
                  "class": "tenant"
                },
                {
                  "attributeValue": "2",
                  "attributeKey": "kis_AR_Preps_4c_4c",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Offset Or Digital",
                  "attributeKey": "Process Type Side 2",
                  "class": "tenant"
                },
                {
                  "attributeValue": "CMYK",
                  "attributeKey": "Process Color Side 1",
                  "class": "product"
                },
                {
                  "attributeValue": "CMYK",
                  "attributeKey": "Process Color Side 2",
                  "class": "product"
                },
                {
                  "attributeValue": "Yes",
                  "attributeKey": "Enable Side 2",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m69",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m68",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m66",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m33",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m169",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m168",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "Lamination Weight",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m51",
                  "class": "tenant"
                },
                {
                  "attributeValue": "2",
                  "attributeKey": "kis_SWITCH_eco_mindays",
                  "class": "tenant"
                },
                {
                  "attributeValue": "15:45",
                  "attributeKey": "Production Deadline",
                  "class": "tenant"
                },
                {
                  "attributeValue": "15:30",
                  "attributeKey": "Setup Deadline",
                  "class": "tenant"
                },
                {
                  "attributeValue": "15:15",
                  "attributeKey": "Customer Care Deadline",
                  "class": "tenant"
                },
                {
                  "attributeValue": "15:00",
                  "attributeKey": "Customer Deadline",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m85",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m160",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m114",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_b04",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_b02",
                  "class": "tenant"
                },
                {
                  "attributeValue": "8",
                  "attributeKey": "kis_AR_Preps_nutzen_je_druckvorgang",
                  "class": "tenant"
                },
                {
                  "attributeValue": "3344",
                  "attributeKey": "kis_AR_Preps_Berechnete_Bogen",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m125",
                  "class": "tenant"
                },
                {
                  "attributeKey": "Quantity",
                  "attributeValue": "2500",
                  "class": "order"
                },
                {
                  "attributeKey": "mcpSku",
                  "attributeValue": "CIM-N1ZVPTQE",
                  "class": "order"
                }
              ]
            },
            {
              "valueAttributes": [
                {
                  "attributeValue": "Yes",
                  "attributeKey": "AutoQuantity",
                  "class": "tenant"
                },
                {
                  "attributeValue": "A4",
                  "attributeKey": "Format",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Portrait",
                  "attributeKey": "PrintOrientation",
                  "class": "tenant"
                },
                {
                  "unitOfMeasure": "cm",
                  "attributeValue": "21",
                  "attributeKey": "CustomWidth",
                  "class": "tenant"
                },
                {
                  "unitOfMeasure": "cm",
                  "attributeValue": "29.7",
                  "attributeKey": "CustomHeight",
                  "class": "tenant"
                },
                {
                  "attributeValue": "170g Double Sided Coated Gloss Paper",
                  "attributeKey": "MaterialWithGrammage",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Double Sided Coated Gloss Paper",
                  "attributeKey": "Material",
                  "class": "tenant"
                },
                {
                  "attributeValue": "170",
                  "attributeKey": "Grammage",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "Folding",
                  "class": "tenant"
                },
                {
                  "attributeValue": "4/4 - CMYK/CMYK",
                  "attributeKey": "PrintColor",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "SpecialFinishing",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Offset",
                  "attributeKey": "PrintingProcess",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "Lamination",
                  "class": "tenant"
                },
                {
                  "attributeValue": "1",
                  "attributeKey": "DesignCount",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "Coating",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "Perforation",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "FoldingOrientation",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Rectangle",
                  "attributeKey": "CutShape",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "HolePunching",
                  "class": "tenant"
                },
                {
                  "attributeValue": "No",
                  "attributeKey": "Bundle",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "BundleCount",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "RoundedCorners",
                  "class": "tenant"
                },
                {
                  "attributeValue": "No",
                  "attributeKey": "RoundedLeftTopCorner",
                  "class": "tenant"
                },
                {
                  "attributeValue": "No",
                  "attributeKey": "RoundedRightTopCorner",
                  "class": "tenant"
                },
                {
                  "attributeValue": "No",
                  "attributeKey": "RoundedLeftBottomCorner",
                  "class": "tenant"
                },
                {
                  "attributeValue": "No",
                  "attributeKey": "RoundedRightBottomCorner",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "Fragrance",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Standard",
                  "attributeKey": "ProductionSpeed",
                  "class": "tenant"
                },
                {
                  "attributeValue": "ShortGrain",
                  "attributeKey": "Grain",
                  "class": "tenant"
                },
                {
                  "attributeValue": "(1050x750)",
                  "attributeKey": "PrintSheetFormat",
                  "class": "tenant"
                },
                {
                  "attributeValue": "26750",
                  "attributeKey": "OverallQuantity",
                  "class": "tenant"
                },
                {
                  "attributeValue": "No",
                  "attributeKey": "Outsourcer",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m65",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Yes",
                  "attributeKey": "PrintedAT",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_AR_OursourcerName",
                  "class": "tenant"
                },
                {
                  "attributeValue": "2",
                  "attributeKey": "kis_Lieferzeit_Liefertage_Max",
                  "class": "tenant"
                },
                {
                  "attributeValue": "2",
                  "attributeKey": "kis_Lieferzeit_Liefertage_Min",
                  "class": "tenant"
                },
                {
                  "attributeValue": "\\\\\\\\fileserver\\\\produktion\\\\Offsetdruck",
                  "attributeKey": "kis_AR_Preps_Transferordner_Pfad",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Offsetdruck",
                  "attributeKey": "kis_AR_Preps_Transferordner",
                  "class": "tenant"
                },
                {
                  "attributeValue": "1",
                  "attributeKey": "kis_shippingOverview_H2",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_shippingOverview_H1",
                  "class": "tenant"
                },
                {
                  "attributeValue": "dd",
                  "attributeKey": "Production Time Type",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "Saver Upscaling",
                  "class": "tenant"
                },
                {
                  "unitOfMeasure": "d",
                  "attributeValue": "0",
                  "attributeKey": "DailyQuota",
                  "class": "tenant"
                },
                {
                  "unitOfMeasure": "pcs",
                  "attributeValue": "2",
                  "attributeKey": "Production Time",
                  "class": "tenant"
                },
                {
                  "attributeValue": "8",
                  "attributeKey": "BBMounting",
                  "class": "tenant"
                },
                {
                  "attributeValue": "8",
                  "attributeKey": "SBMounting",
                  "class": "tenant"
                },
                {
                  "attributeValue": "2",
                  "attributeKey": "BBMountingHeightCalculation",
                  "class": "tenant"
                },
                {
                  "attributeValue": "4",
                  "attributeKey": "BBMountingWidthCalculation",
                  "class": "tenant"
                },
                {
                  "attributeValue": "2",
                  "attributeKey": "SBMountingHeightCalculation",
                  "class": "tenant"
                },
                {
                  "attributeValue": "4",
                  "attributeKey": "SBMountingWidthCalculation",
                  "class": "tenant"
                },
                {
                  "attributeValue": "71.1",
                  "attributeKey": "SBFormatHeightResult",
                  "class": "tenant"
                },
                {
                  "attributeValue": "102.6",
                  "attributeKey": "BBFormatWidthResult",
                  "class": "tenant"
                },
                {
                  "attributeValue": "102.6",
                  "attributeKey": "SBFormatWidthResult",
                  "class": "tenant"
                },
                {
                  "attributeValue": "71.1",
                  "attributeKey": "BBFormatHeightResult",
                  "class": "tenant"
                },
                {
                  "attributeValue": "KD82",
                  "attributeKey": "kis_AR_Preps_Materialcode_KEY",
                  "class": "tenant"
                },
                {
                  "attributeValue": "1",
                  "attributeKey": "kis_Z_m71",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m70",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m18",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m07",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m01",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m02",
                  "class": "tenant"
                },
                {
                  "attributeValue": "1",
                  "attributeKey": "kis_Z_b06",
                  "class": "tenant"
                },
                {
                  "attributeValue": "283627.575",
                  "attributeKey": "Shippable Pack Weight",
                  "class": "tenant"
                },
                {
                  "attributeValue": "10.6029",
                  "attributeKey": "Product Weight",
                  "class": "tenant"
                },
                {
                  "attributeValue": "https://readonly.uploads.documents.cimpress.io/v1/uploads/e0e86689-4579-4da2-a820-2064d1046c77~100?tenant=prepress-uploads",
                  "attributeKey": "Prepress Parameters URL",
                  "class": "document"
                },
                {
                  "attributeValue": "https://print.prepress.cimpress.io/v2/print-prep?asynchronous=true",
                  "attributeKey": "Prepress URL",
                  "class": "document"
                },
                {
                  "unitOfMeasure": "mm",
                  "attributeValue": "2",
                  "attributeKey": "Surface Bleed",
                  "class": "document"
                },
                {
                  "attributeValue": "Offset Or Digital",
                  "attributeKey": "Process Type Side 1",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Yes",
                  "attributeKey": "Enable Side 1",
                  "class": "tenant"
                },
                {
                  "attributeValue": "2",
                  "attributeKey": "Surface Safety",
                  "class": "tenant"
                },
                {
                  "attributeValue": "1",
                  "attributeKey": "Sets",
                  "class": "product"
                },
                {
                  "attributeValue": "21",
                  "attributeKey": "Trim Width",
                  "class": "product"
                },
                {
                  "attributeValue": "29.7",
                  "attributeKey": "Trim Height",
                  "class": "product"
                },
                {
                  "attributeValue": "https://fulfillmentscenarios.fi.cimpress.io/v1/scenarios:echo?fulfillerIds=aqvf30vtp&fulfillmentLocationIds=b3e09wqffj1",
                  "attributeKey": "Fulfillment Configuration",
                  "class": "fulfillment"
                },
                {
                  "attributeValue": "1000",
                  "attributeKey": "kis_AR_Kialkulationsschema",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Yes",
                  "attributeKey": "FSC",
                  "class": "tenant"
                },
                {
                  "attributeValue": "128",
                  "attributeKey": "Substrate Thickness",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Not Premium",
                  "attributeKey": "Premium",
                  "class": "tenant"
                },
                {
                  "attributeValue": "No",
                  "attributeKey": "Premium Material",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m163",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m162",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m161",
                  "class": "tenant"
                },
                {
                  "attributeValue": "170",
                  "attributeKey": "Grams",
                  "class": "tenant"
                },
                {
                  "attributeValue": "2",
                  "attributeKey": "kis_AR_Preps_4c_4c",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Offset Or Digital",
                  "attributeKey": "Process Type Side 2",
                  "class": "tenant"
                },
                {
                  "attributeValue": "CMYK",
                  "attributeKey": "Process Color Side 1",
                  "class": "product"
                },
                {
                  "attributeValue": "CMYK",
                  "attributeKey": "Process Color Side 2",
                  "class": "product"
                },
                {
                  "attributeValue": "Yes",
                  "attributeKey": "Enable Side 2",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m69",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m68",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m66",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m33",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m169",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m168",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "Lamination Weight",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m51",
                  "class": "tenant"
                },
                {
                  "attributeValue": "2",
                  "attributeKey": "kis_SWITCH_eco_mindays",
                  "class": "tenant"
                },
                {
                  "attributeValue": "15:45",
                  "attributeKey": "Production Deadline",
                  "class": "tenant"
                },
                {
                  "attributeValue": "15:30",
                  "attributeKey": "Setup Deadline",
                  "class": "tenant"
                },
                {
                  "attributeValue": "15:15",
                  "attributeKey": "Customer Care Deadline",
                  "class": "tenant"
                },
                {
                  "attributeValue": "15:00",
                  "attributeKey": "Customer Deadline",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m85",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m160",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m114",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_b04",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_b02",
                  "class": "tenant"
                },
                {
                  "attributeValue": "8",
                  "attributeKey": "kis_AR_Preps_nutzen_je_druckvorgang",
                  "class": "tenant"
                },
                {
                  "attributeValue": "3344",
                  "attributeKey": "kis_AR_Preps_Berechnete_Bogen",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m125",
                  "class": "tenant"
                },
                {
                  "attributeKey": "Quantity",
                  "attributeValue": "5000",
                  "class": "order"
                },
                {
                  "attributeKey": "mcpSku",
                  "attributeValue": "CIM-N1ZVPTQE",
                  "class": "order"
                }
              ]
            },
            {
              "valueAttributes": [
                {
                  "attributeValue": "Yes",
                  "attributeKey": "AutoQuantity",
                  "class": "tenant"
                },
                {
                  "attributeValue": "A4",
                  "attributeKey": "Format",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Portrait",
                  "attributeKey": "PrintOrientation",
                  "class": "tenant"
                },
                {
                  "unitOfMeasure": "cm",
                  "attributeValue": "21",
                  "attributeKey": "CustomWidth",
                  "class": "tenant"
                },
                {
                  "unitOfMeasure": "cm",
                  "attributeValue": "29.7",
                  "attributeKey": "CustomHeight",
                  "class": "tenant"
                },
                {
                  "attributeValue": "170g Double Sided Coated Gloss Paper",
                  "attributeKey": "MaterialWithGrammage",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Double Sided Coated Gloss Paper",
                  "attributeKey": "Material",
                  "class": "tenant"
                },
                {
                  "attributeValue": "170",
                  "attributeKey": "Grammage",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "Folding",
                  "class": "tenant"
                },
                {
                  "attributeValue": "4/4 - CMYK/CMYK",
                  "attributeKey": "PrintColor",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "SpecialFinishing",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Offset",
                  "attributeKey": "PrintingProcess",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "Lamination",
                  "class": "tenant"
                },
                {
                  "attributeValue": "1",
                  "attributeKey": "DesignCount",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "Coating",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "Perforation",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "FoldingOrientation",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Rectangle",
                  "attributeKey": "CutShape",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "HolePunching",
                  "class": "tenant"
                },
                {
                  "attributeValue": "No",
                  "attributeKey": "Bundle",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "BundleCount",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "RoundedCorners",
                  "class": "tenant"
                },
                {
                  "attributeValue": "No",
                  "attributeKey": "RoundedLeftTopCorner",
                  "class": "tenant"
                },
                {
                  "attributeValue": "No",
                  "attributeKey": "RoundedRightTopCorner",
                  "class": "tenant"
                },
                {
                  "attributeValue": "No",
                  "attributeKey": "RoundedLeftBottomCorner",
                  "class": "tenant"
                },
                {
                  "attributeValue": "No",
                  "attributeKey": "RoundedRightBottomCorner",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "Fragrance",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Standard",
                  "attributeKey": "ProductionSpeed",
                  "class": "tenant"
                },
                {
                  "attributeValue": "ShortGrain",
                  "attributeKey": "Grain",
                  "class": "tenant"
                },
                {
                  "attributeValue": "(1050x750)",
                  "attributeKey": "PrintSheetFormat",
                  "class": "tenant"
                },
                {
                  "attributeValue": "26750",
                  "attributeKey": "OverallQuantity",
                  "class": "tenant"
                },
                {
                  "attributeValue": "No",
                  "attributeKey": "Outsourcer",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m65",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Yes",
                  "attributeKey": "PrintedAT",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_AR_OursourcerName",
                  "class": "tenant"
                },
                {
                  "attributeValue": "2",
                  "attributeKey": "kis_Lieferzeit_Liefertage_Max",
                  "class": "tenant"
                },
                {
                  "attributeValue": "2",
                  "attributeKey": "kis_Lieferzeit_Liefertage_Min",
                  "class": "tenant"
                },
                {
                  "attributeValue": "\\\\\\\\fileserver\\\\produktion\\\\Offsetdruck",
                  "attributeKey": "kis_AR_Preps_Transferordner_Pfad",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Offsetdruck",
                  "attributeKey": "kis_AR_Preps_Transferordner",
                  "class": "tenant"
                },
                {
                  "attributeValue": "1",
                  "attributeKey": "kis_shippingOverview_H2",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_shippingOverview_H1",
                  "class": "tenant"
                },
                {
                  "attributeValue": "dd",
                  "attributeKey": "Production Time Type",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "Saver Upscaling",
                  "class": "tenant"
                },
                {
                  "unitOfMeasure": "d",
                  "attributeValue": "0",
                  "attributeKey": "DailyQuota",
                  "class": "tenant"
                },
                {
                  "unitOfMeasure": "pcs",
                  "attributeValue": "2",
                  "attributeKey": "Production Time",
                  "class": "tenant"
                },
                {
                  "attributeValue": "8",
                  "attributeKey": "BBMounting",
                  "class": "tenant"
                },
                {
                  "attributeValue": "8",
                  "attributeKey": "SBMounting",
                  "class": "tenant"
                },
                {
                  "attributeValue": "2",
                  "attributeKey": "BBMountingHeightCalculation",
                  "class": "tenant"
                },
                {
                  "attributeValue": "4",
                  "attributeKey": "BBMountingWidthCalculation",
                  "class": "tenant"
                },
                {
                  "attributeValue": "2",
                  "attributeKey": "SBMountingHeightCalculation",
                  "class": "tenant"
                },
                {
                  "attributeValue": "4",
                  "attributeKey": "SBMountingWidthCalculation",
                  "class": "tenant"
                },
                {
                  "attributeValue": "71.1",
                  "attributeKey": "SBFormatHeightResult",
                  "class": "tenant"
                },
                {
                  "attributeValue": "102.6",
                  "attributeKey": "BBFormatWidthResult",
                  "class": "tenant"
                },
                {
                  "attributeValue": "102.6",
                  "attributeKey": "SBFormatWidthResult",
                  "class": "tenant"
                },
                {
                  "attributeValue": "71.1",
                  "attributeKey": "BBFormatHeightResult",
                  "class": "tenant"
                },
                {
                  "attributeValue": "KD82",
                  "attributeKey": "kis_AR_Preps_Materialcode_KEY",
                  "class": "tenant"
                },
                {
                  "attributeValue": "1",
                  "attributeKey": "kis_Z_m71",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m70",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m18",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m07",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m01",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m02",
                  "class": "tenant"
                },
                {
                  "attributeValue": "1",
                  "attributeKey": "kis_Z_b06",
                  "class": "tenant"
                },
                {
                  "attributeValue": "283627.575",
                  "attributeKey": "Shippable Pack Weight",
                  "class": "tenant"
                },
                {
                  "attributeValue": "10.6029",
                  "attributeKey": "Product Weight",
                  "class": "tenant"
                },
                {
                  "attributeValue": "https://readonly.uploads.documents.cimpress.io/v1/uploads/e0e86689-4579-4da2-a820-2064d1046c77~100?tenant=prepress-uploads",
                  "attributeKey": "Prepress Parameters URL",
                  "class": "document"
                },
                {
                  "attributeValue": "https://print.prepress.cimpress.io/v2/print-prep?asynchronous=true",
                  "attributeKey": "Prepress URL",
                  "class": "document"
                },
                {
                  "unitOfMeasure": "mm",
                  "attributeValue": "2",
                  "attributeKey": "Surface Bleed",
                  "class": "document"
                },
                {
                  "attributeValue": "Offset Or Digital",
                  "attributeKey": "Process Type Side 1",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Yes",
                  "attributeKey": "Enable Side 1",
                  "class": "tenant"
                },
                {
                  "attributeValue": "2",
                  "attributeKey": "Surface Safety",
                  "class": "tenant"
                },
                {
                  "attributeValue": "1",
                  "attributeKey": "Sets",
                  "class": "product"
                },
                {
                  "attributeValue": "21",
                  "attributeKey": "Trim Width",
                  "class": "product"
                },
                {
                  "attributeValue": "29.7",
                  "attributeKey": "Trim Height",
                  "class": "product"
                },
                {
                  "attributeValue": "https://fulfillmentscenarios.fi.cimpress.io/v1/scenarios:echo?fulfillerIds=aqvf30vtp&fulfillmentLocationIds=b3e09wqffj1",
                  "attributeKey": "Fulfillment Configuration",
                  "class": "fulfillment"
                },
                {
                  "attributeValue": "1000",
                  "attributeKey": "kis_AR_Kialkulationsschema",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Yes",
                  "attributeKey": "FSC",
                  "class": "tenant"
                },
                {
                  "attributeValue": "128",
                  "attributeKey": "Substrate Thickness",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Not Premium",
                  "attributeKey": "Premium",
                  "class": "tenant"
                },
                {
                  "attributeValue": "No",
                  "attributeKey": "Premium Material",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m163",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m162",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m161",
                  "class": "tenant"
                },
                {
                  "attributeValue": "170",
                  "attributeKey": "Grams",
                  "class": "tenant"
                },
                {
                  "attributeValue": "2",
                  "attributeKey": "kis_AR_Preps_4c_4c",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Offset Or Digital",
                  "attributeKey": "Process Type Side 2",
                  "class": "tenant"
                },
                {
                  "attributeValue": "CMYK",
                  "attributeKey": "Process Color Side 1",
                  "class": "product"
                },
                {
                  "attributeValue": "CMYK",
                  "attributeKey": "Process Color Side 2",
                  "class": "product"
                },
                {
                  "attributeValue": "Yes",
                  "attributeKey": "Enable Side 2",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m69",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m68",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m66",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m33",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m169",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m168",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "Lamination Weight",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m51",
                  "class": "tenant"
                },
                {
                  "attributeValue": "2",
                  "attributeKey": "kis_SWITCH_eco_mindays",
                  "class": "tenant"
                },
                {
                  "attributeValue": "15:45",
                  "attributeKey": "Production Deadline",
                  "class": "tenant"
                },
                {
                  "attributeValue": "15:30",
                  "attributeKey": "Setup Deadline",
                  "class": "tenant"
                },
                {
                  "attributeValue": "15:15",
                  "attributeKey": "Customer Care Deadline",
                  "class": "tenant"
                },
                {
                  "attributeValue": "15:00",
                  "attributeKey": "Customer Deadline",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m85",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m160",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m114",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_b04",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_b02",
                  "class": "tenant"
                },
                {
                  "attributeValue": "8",
                  "attributeKey": "kis_AR_Preps_nutzen_je_druckvorgang",
                  "class": "tenant"
                },
                {
                  "attributeValue": "3344",
                  "attributeKey": "kis_AR_Preps_Berechnete_Bogen",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m125",
                  "class": "tenant"
                },
                {
                  "attributeKey": "Quantity",
                  "attributeValue": "10000",
                  "class": "order"
                },
                {
                  "attributeKey": "mcpSku",
                  "attributeValue": "CIM-N1ZVPTQE",
                  "class": "order"
                }
              ]
            },
            {
              "valueAttributes": [
                {
                  "attributeValue": "Yes",
                  "attributeKey": "AutoQuantity",
                  "class": "tenant"
                },
                {
                  "attributeValue": "A4",
                  "attributeKey": "Format",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Portrait",
                  "attributeKey": "PrintOrientation",
                  "class": "tenant"
                },
                {
                  "unitOfMeasure": "cm",
                  "attributeValue": "21",
                  "attributeKey": "CustomWidth",
                  "class": "tenant"
                },
                {
                  "unitOfMeasure": "cm",
                  "attributeValue": "29.7",
                  "attributeKey": "CustomHeight",
                  "class": "tenant"
                },
                {
                  "attributeValue": "170g Double Sided Coated Gloss Paper",
                  "attributeKey": "MaterialWithGrammage",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Double Sided Coated Gloss Paper",
                  "attributeKey": "Material",
                  "class": "tenant"
                },
                {
                  "attributeValue": "170",
                  "attributeKey": "Grammage",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "Folding",
                  "class": "tenant"
                },
                {
                  "attributeValue": "4/4 - CMYK/CMYK",
                  "attributeKey": "PrintColor",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "SpecialFinishing",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Offset",
                  "attributeKey": "PrintingProcess",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "Lamination",
                  "class": "tenant"
                },
                {
                  "attributeValue": "1",
                  "attributeKey": "DesignCount",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "Coating",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "Perforation",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "FoldingOrientation",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Rectangle",
                  "attributeKey": "CutShape",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "HolePunching",
                  "class": "tenant"
                },
                {
                  "attributeValue": "No",
                  "attributeKey": "Bundle",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "BundleCount",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "RoundedCorners",
                  "class": "tenant"
                },
                {
                  "attributeValue": "No",
                  "attributeKey": "RoundedLeftTopCorner",
                  "class": "tenant"
                },
                {
                  "attributeValue": "No",
                  "attributeKey": "RoundedRightTopCorner",
                  "class": "tenant"
                },
                {
                  "attributeValue": "No",
                  "attributeKey": "RoundedLeftBottomCorner",
                  "class": "tenant"
                },
                {
                  "attributeValue": "No",
                  "attributeKey": "RoundedRightBottomCorner",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "Fragrance",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Standard",
                  "attributeKey": "ProductionSpeed",
                  "class": "tenant"
                },
                {
                  "attributeValue": "ShortGrain",
                  "attributeKey": "Grain",
                  "class": "tenant"
                },
                {
                  "attributeValue": "(1050x750)",
                  "attributeKey": "PrintSheetFormat",
                  "class": "tenant"
                },
                {
                  "attributeValue": "26750",
                  "attributeKey": "OverallQuantity",
                  "class": "tenant"
                },
                {
                  "attributeValue": "No",
                  "attributeKey": "Outsourcer",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m65",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Yes",
                  "attributeKey": "PrintedAT",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_AR_OursourcerName",
                  "class": "tenant"
                },
                {
                  "attributeValue": "2",
                  "attributeKey": "kis_Lieferzeit_Liefertage_Max",
                  "class": "tenant"
                },
                {
                  "attributeValue": "2",
                  "attributeKey": "kis_Lieferzeit_Liefertage_Min",
                  "class": "tenant"
                },
                {
                  "attributeValue": "\\\\\\\\fileserver\\\\produktion\\\\Offsetdruck",
                  "attributeKey": "kis_AR_Preps_Transferordner_Pfad",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Offsetdruck",
                  "attributeKey": "kis_AR_Preps_Transferordner",
                  "class": "tenant"
                },
                {
                  "attributeValue": "1",
                  "attributeKey": "kis_shippingOverview_H2",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_shippingOverview_H1",
                  "class": "tenant"
                },
                {
                  "attributeValue": "dd",
                  "attributeKey": "Production Time Type",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "Saver Upscaling",
                  "class": "tenant"
                },
                {
                  "unitOfMeasure": "d",
                  "attributeValue": "0",
                  "attributeKey": "DailyQuota",
                  "class": "tenant"
                },
                {
                  "unitOfMeasure": "pcs",
                  "attributeValue": "2",
                  "attributeKey": "Production Time",
                  "class": "tenant"
                },
                {
                  "attributeValue": "8",
                  "attributeKey": "BBMounting",
                  "class": "tenant"
                },
                {
                  "attributeValue": "8",
                  "attributeKey": "SBMounting",
                  "class": "tenant"
                },
                {
                  "attributeValue": "2",
                  "attributeKey": "BBMountingHeightCalculation",
                  "class": "tenant"
                },
                {
                  "attributeValue": "4",
                  "attributeKey": "BBMountingWidthCalculation",
                  "class": "tenant"
                },
                {
                  "attributeValue": "2",
                  "attributeKey": "SBMountingHeightCalculation",
                  "class": "tenant"
                },
                {
                  "attributeValue": "4",
                  "attributeKey": "SBMountingWidthCalculation",
                  "class": "tenant"
                },
                {
                  "attributeValue": "71.1",
                  "attributeKey": "SBFormatHeightResult",
                  "class": "tenant"
                },
                {
                  "attributeValue": "102.6",
                  "attributeKey": "BBFormatWidthResult",
                  "class": "tenant"
                },
                {
                  "attributeValue": "102.6",
                  "attributeKey": "SBFormatWidthResult",
                  "class": "tenant"
                },
                {
                  "attributeValue": "71.1",
                  "attributeKey": "BBFormatHeightResult",
                  "class": "tenant"
                },
                {
                  "attributeValue": "KD82",
                  "attributeKey": "kis_AR_Preps_Materialcode_KEY",
                  "class": "tenant"
                },
                {
                  "attributeValue": "1",
                  "attributeKey": "kis_Z_m71",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m70",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m18",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m07",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m01",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m02",
                  "class": "tenant"
                },
                {
                  "attributeValue": "1",
                  "attributeKey": "kis_Z_b06",
                  "class": "tenant"
                },
                {
                  "attributeValue": "283627.575",
                  "attributeKey": "Shippable Pack Weight",
                  "class": "tenant"
                },
                {
                  "attributeValue": "10.6029",
                  "attributeKey": "Product Weight",
                  "class": "tenant"
                },
                {
                  "attributeValue": "https://readonly.uploads.documents.cimpress.io/v1/uploads/e0e86689-4579-4da2-a820-2064d1046c77~100?tenant=prepress-uploads",
                  "attributeKey": "Prepress Parameters URL",
                  "class": "document"
                },
                {
                  "attributeValue": "https://print.prepress.cimpress.io/v2/print-prep?asynchronous=true",
                  "attributeKey": "Prepress URL",
                  "class": "document"
                },
                {
                  "unitOfMeasure": "mm",
                  "attributeValue": "2",
                  "attributeKey": "Surface Bleed",
                  "class": "document"
                },
                {
                  "attributeValue": "Offset Or Digital",
                  "attributeKey": "Process Type Side 1",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Yes",
                  "attributeKey": "Enable Side 1",
                  "class": "tenant"
                },
                {
                  "attributeValue": "2",
                  "attributeKey": "Surface Safety",
                  "class": "tenant"
                },
                {
                  "attributeValue": "1",
                  "attributeKey": "Sets",
                  "class": "product"
                },
                {
                  "attributeValue": "21",
                  "attributeKey": "Trim Width",
                  "class": "product"
                },
                {
                  "attributeValue": "29.7",
                  "attributeKey": "Trim Height",
                  "class": "product"
                },
                {
                  "attributeValue": "https://fulfillmentscenarios.fi.cimpress.io/v1/scenarios:echo?fulfillerIds=aqvf30vtp&fulfillmentLocationIds=b3e09wqffj1",
                  "attributeKey": "Fulfillment Configuration",
                  "class": "fulfillment"
                },
                {
                  "attributeValue": "1000",
                  "attributeKey": "kis_AR_Kialkulationsschema",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Yes",
                  "attributeKey": "FSC",
                  "class": "tenant"
                },
                {
                  "attributeValue": "128",
                  "attributeKey": "Substrate Thickness",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Not Premium",
                  "attributeKey": "Premium",
                  "class": "tenant"
                },
                {
                  "attributeValue": "No",
                  "attributeKey": "Premium Material",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m163",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m162",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m161",
                  "class": "tenant"
                },
                {
                  "attributeValue": "170",
                  "attributeKey": "Grams",
                  "class": "tenant"
                },
                {
                  "attributeValue": "2",
                  "attributeKey": "kis_AR_Preps_4c_4c",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Offset Or Digital",
                  "attributeKey": "Process Type Side 2",
                  "class": "tenant"
                },
                {
                  "attributeValue": "CMYK",
                  "attributeKey": "Process Color Side 1",
                  "class": "product"
                },
                {
                  "attributeValue": "CMYK",
                  "attributeKey": "Process Color Side 2",
                  "class": "product"
                },
                {
                  "attributeValue": "Yes",
                  "attributeKey": "Enable Side 2",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m69",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m68",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m66",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m33",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m169",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m168",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "Lamination Weight",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m51",
                  "class": "tenant"
                },
                {
                  "attributeValue": "2",
                  "attributeKey": "kis_SWITCH_eco_mindays",
                  "class": "tenant"
                },
                {
                  "attributeValue": "15:45",
                  "attributeKey": "Production Deadline",
                  "class": "tenant"
                },
                {
                  "attributeValue": "15:30",
                  "attributeKey": "Setup Deadline",
                  "class": "tenant"
                },
                {
                  "attributeValue": "15:15",
                  "attributeKey": "Customer Care Deadline",
                  "class": "tenant"
                },
                {
                  "attributeValue": "15:00",
                  "attributeKey": "Customer Deadline",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m85",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m160",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m114",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_b04",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_b02",
                  "class": "tenant"
                },
                {
                  "attributeValue": "8",
                  "attributeKey": "kis_AR_Preps_nutzen_je_druckvorgang",
                  "class": "tenant"
                },
                {
                  "attributeValue": "3344",
                  "attributeKey": "kis_AR_Preps_Berechnete_Bogen",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m125",
                  "class": "tenant"
                },
                {
                  "attributeKey": "Quantity",
                  "attributeValue": "50000",
                  "class": "order"
                },
                {
                  "attributeKey": "mcpSku",
                  "attributeValue": "CIM-N1ZVPTQE",
                  "class": "order"
                }
              ]
            },
            {
              "valueAttributes": [
                {
                  "attributeValue": "Yes",
                  "attributeKey": "AutoQuantity",
                  "class": "tenant"
                },
                {
                  "attributeValue": "A4",
                  "attributeKey": "Format",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Portrait",
                  "attributeKey": "PrintOrientation",
                  "class": "tenant"
                },
                {
                  "unitOfMeasure": "cm",
                  "attributeValue": "21",
                  "attributeKey": "CustomWidth",
                  "class": "tenant"
                },
                {
                  "unitOfMeasure": "cm",
                  "attributeValue": "29.7",
                  "attributeKey": "CustomHeight",
                  "class": "tenant"
                },
                {
                  "attributeValue": "170g Double Sided Coated Gloss Paper",
                  "attributeKey": "MaterialWithGrammage",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Double Sided Coated Gloss Paper",
                  "attributeKey": "Material",
                  "class": "tenant"
                },
                {
                  "attributeValue": "170",
                  "attributeKey": "Grammage",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "Folding",
                  "class": "tenant"
                },
                {
                  "attributeValue": "4/4 - CMYK/CMYK",
                  "attributeKey": "PrintColor",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "SpecialFinishing",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Offset",
                  "attributeKey": "PrintingProcess",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "Lamination",
                  "class": "tenant"
                },
                {
                  "attributeValue": "1",
                  "attributeKey": "DesignCount",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "Coating",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "Perforation",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "FoldingOrientation",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Rectangle",
                  "attributeKey": "CutShape",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "HolePunching",
                  "class": "tenant"
                },
                {
                  "attributeValue": "No",
                  "attributeKey": "Bundle",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "BundleCount",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "RoundedCorners",
                  "class": "tenant"
                },
                {
                  "attributeValue": "No",
                  "attributeKey": "RoundedLeftTopCorner",
                  "class": "tenant"
                },
                {
                  "attributeValue": "No",
                  "attributeKey": "RoundedRightTopCorner",
                  "class": "tenant"
                },
                {
                  "attributeValue": "No",
                  "attributeKey": "RoundedLeftBottomCorner",
                  "class": "tenant"
                },
                {
                  "attributeValue": "No",
                  "attributeKey": "RoundedRightBottomCorner",
                  "class": "tenant"
                },
                {
                  "attributeValue": "None",
                  "attributeKey": "Fragrance",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Standard",
                  "attributeKey": "ProductionSpeed",
                  "class": "tenant"
                },
                {
                  "attributeValue": "ShortGrain",
                  "attributeKey": "Grain",
                  "class": "tenant"
                },
                {
                  "attributeValue": "(1050x750)",
                  "attributeKey": "PrintSheetFormat",
                  "class": "tenant"
                },
                {
                  "attributeValue": "26750",
                  "attributeKey": "OverallQuantity",
                  "class": "tenant"
                },
                {
                  "attributeValue": "No",
                  "attributeKey": "Outsourcer",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m65",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Yes",
                  "attributeKey": "PrintedAT",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_AR_OursourcerName",
                  "class": "tenant"
                },
                {
                  "attributeValue": "2",
                  "attributeKey": "kis_Lieferzeit_Liefertage_Max",
                  "class": "tenant"
                },
                {
                  "attributeValue": "2",
                  "attributeKey": "kis_Lieferzeit_Liefertage_Min",
                  "class": "tenant"
                },
                {
                  "attributeValue": "\\\\\\\\fileserver\\\\produktion\\\\Offsetdruck",
                  "attributeKey": "kis_AR_Preps_Transferordner_Pfad",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Offsetdruck",
                  "attributeKey": "kis_AR_Preps_Transferordner",
                  "class": "tenant"
                },
                {
                  "attributeValue": "1",
                  "attributeKey": "kis_shippingOverview_H2",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_shippingOverview_H1",
                  "class": "tenant"
                },
                {
                  "attributeValue": "dd",
                  "attributeKey": "Production Time Type",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "Saver Upscaling",
                  "class": "tenant"
                },
                {
                  "unitOfMeasure": "d",
                  "attributeValue": "0",
                  "attributeKey": "DailyQuota",
                  "class": "tenant"
                },
                {
                  "unitOfMeasure": "pcs",
                  "attributeValue": "2",
                  "attributeKey": "Production Time",
                  "class": "tenant"
                },
                {
                  "attributeValue": "8",
                  "attributeKey": "BBMounting",
                  "class": "tenant"
                },
                {
                  "attributeValue": "8",
                  "attributeKey": "SBMounting",
                  "class": "tenant"
                },
                {
                  "attributeValue": "2",
                  "attributeKey": "BBMountingHeightCalculation",
                  "class": "tenant"
                },
                {
                  "attributeValue": "4",
                  "attributeKey": "BBMountingWidthCalculation",
                  "class": "tenant"
                },
                {
                  "attributeValue": "2",
                  "attributeKey": "SBMountingHeightCalculation",
                  "class": "tenant"
                },
                {
                  "attributeValue": "4",
                  "attributeKey": "SBMountingWidthCalculation",
                  "class": "tenant"
                },
                {
                  "attributeValue": "71.1",
                  "attributeKey": "SBFormatHeightResult",
                  "class": "tenant"
                },
                {
                  "attributeValue": "102.6",
                  "attributeKey": "BBFormatWidthResult",
                  "class": "tenant"
                },
                {
                  "attributeValue": "102.6",
                  "attributeKey": "SBFormatWidthResult",
                  "class": "tenant"
                },
                {
                  "attributeValue": "71.1",
                  "attributeKey": "BBFormatHeightResult",
                  "class": "tenant"
                },
                {
                  "attributeValue": "KD82",
                  "attributeKey": "kis_AR_Preps_Materialcode_KEY",
                  "class": "tenant"
                },
                {
                  "attributeValue": "1",
                  "attributeKey": "kis_Z_m71",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m70",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m18",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m07",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m01",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m02",
                  "class": "tenant"
                },
                {
                  "attributeValue": "1",
                  "attributeKey": "kis_Z_b06",
                  "class": "tenant"
                },
                {
                  "attributeValue": "283627.575",
                  "attributeKey": "Shippable Pack Weight",
                  "class": "tenant"
                },
                {
                  "attributeValue": "10.6029",
                  "attributeKey": "Product Weight",
                  "class": "tenant"
                },
                {
                  "attributeValue": "https://readonly.uploads.documents.cimpress.io/v1/uploads/e0e86689-4579-4da2-a820-2064d1046c77~100?tenant=prepress-uploads",
                  "attributeKey": "Prepress Parameters URL",
                  "class": "document"
                },
                {
                  "attributeValue": "https://print.prepress.cimpress.io/v2/print-prep?asynchronous=true",
                  "attributeKey": "Prepress URL",
                  "class": "document"
                },
                {
                  "unitOfMeasure": "mm",
                  "attributeValue": "2",
                  "attributeKey": "Surface Bleed",
                  "class": "document"
                },
                {
                  "attributeValue": "Offset Or Digital",
                  "attributeKey": "Process Type Side 1",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Yes",
                  "attributeKey": "Enable Side 1",
                  "class": "tenant"
                },
                {
                  "attributeValue": "2",
                  "attributeKey": "Surface Safety",
                  "class": "tenant"
                },
                {
                  "attributeValue": "1",
                  "attributeKey": "Sets",
                  "class": "product"
                },
                {
                  "attributeValue": "21",
                  "attributeKey": "Trim Width",
                  "class": "product"
                },
                {
                  "attributeValue": "29.7",
                  "attributeKey": "Trim Height",
                  "class": "product"
                },
                {
                  "attributeValue": "https://fulfillmentscenarios.fi.cimpress.io/v1/scenarios:echo?fulfillerIds=aqvf30vtp&fulfillmentLocationIds=b3e09wqffj1",
                  "attributeKey": "Fulfillment Configuration",
                  "class": "fulfillment"
                },
                {
                  "attributeValue": "1000",
                  "attributeKey": "kis_AR_Kialkulationsschema",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Yes",
                  "attributeKey": "FSC",
                  "class": "tenant"
                },
                {
                  "attributeValue": "128",
                  "attributeKey": "Substrate Thickness",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Not Premium",
                  "attributeKey": "Premium",
                  "class": "tenant"
                },
                {
                  "attributeValue": "No",
                  "attributeKey": "Premium Material",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m163",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m162",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m161",
                  "class": "tenant"
                },
                {
                  "attributeValue": "170",
                  "attributeKey": "Grams",
                  "class": "tenant"
                },
                {
                  "attributeValue": "2",
                  "attributeKey": "kis_AR_Preps_4c_4c",
                  "class": "tenant"
                },
                {
                  "attributeValue": "Offset Or Digital",
                  "attributeKey": "Process Type Side 2",
                  "class": "tenant"
                },
                {
                  "attributeValue": "CMYK",
                  "attributeKey": "Process Color Side 1",
                  "class": "product"
                },
                {
                  "attributeValue": "CMYK",
                  "attributeKey": "Process Color Side 2",
                  "class": "product"
                },
                {
                  "attributeValue": "Yes",
                  "attributeKey": "Enable Side 2",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m69",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m68",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m66",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m33",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m169",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m168",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "Lamination Weight",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m51",
                  "class": "tenant"
                },
                {
                  "attributeValue": "2",
                  "attributeKey": "kis_SWITCH_eco_mindays",
                  "class": "tenant"
                },
                {
                  "attributeValue": "15:45",
                  "attributeKey": "Production Deadline",
                  "class": "tenant"
                },
                {
                  "attributeValue": "15:30",
                  "attributeKey": "Setup Deadline",
                  "class": "tenant"
                },
                {
                  "attributeValue": "15:15",
                  "attributeKey": "Customer Care Deadline",
                  "class": "tenant"
                },
                {
                  "attributeValue": "15:00",
                  "attributeKey": "Customer Deadline",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m85",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m160",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m114",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_b04",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_b02",
                  "class": "tenant"
                },
                {
                  "attributeValue": "8",
                  "attributeKey": "kis_AR_Preps_nutzen_je_druckvorgang",
                  "class": "tenant"
                },
                {
                  "attributeValue": "3344",
                  "attributeKey": "kis_AR_Preps_Berechnete_Bogen",
                  "class": "tenant"
                },
                {
                  "attributeValue": "0",
                  "attributeKey": "kis_Z_m125",
                  "class": "tenant"
                },
                {
                  "attributeKey": "Quantity",
                  "attributeValue": "26750",
                  "class": "order"
                },
                {
                  "attributeKey": "mcpSku",
                  "attributeValue": "CIM-N1ZVPTQE",
                  "class": "order"
                }
              ]
            }
          ]
        }
      },
      "HttpStatus": null,
      "HttpElapsedMs": null,
      "Username": null
    },
    "ApplicationName": "Cimpress Financial Flows Product Price Service",
    "ApplicationVersion": "ApplicationVersion",
    "Level": "INFO",
    "Logger": "FF.Utilities.Middleware.Owin.Logging.LoggingMiddleware",
    "Message": "=>S /api/v1/bulkevaluate (POST)",
    "OrionCorrelationData": {
      "RootId": "5092eeaa-2417-4358-aeb1-7f30ff5fb84b",
      "ParentId": "dba3f714-1228-4793-bb51-14feee283693",
      "LeafId": "ea4f3c0b-d19e-4db7-976e-618d08b9cbbd"
    },
    "UtcTimestamp": "2023-07-07T18:03:57.573Z",
    "InstanceId": "i-05d11931a9e348453"
  }