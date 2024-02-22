window.BENCHMARK_DATA = {
  "lastUpdate": 1708597109106,
  "repoUrl": "https://github.com/adria0/halo2",
  "entries": {
    "halo2 Benchmark": [
      {
        "commit": {
          "author": {
            "email": "daira@jacaranda.org",
            "name": "Daira-Emma Hopwood",
            "username": "daira"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "81729eca91ba4755e247f49c3a72a4232864ec9e",
          "message": "Merge pull request #809 from daira/remove-empty-halo2-crate-from-readme\n\nRemove references to the empty `halo2` crate from the README",
          "timestamp": "2024-02-06T15:25:48Z",
          "tree_id": "3521c57b892e1fe1dd7556eea0b855b7ce28b24b",
          "url": "https://github.com/adria0/halo2/commit/81729eca91ba4755e247f49c3a72a4232864ec9e"
        },
        "date": 1708597106687,
        "tool": "cargo",
        "benches": [
          {
            "name": "WIDTH = 3, RATE = 2-prover",
            "value": 71671533,
            "range": "± 963653",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 3, RATE = 2-verifier",
            "value": 4122036,
            "range": "± 84199",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 9, RATE = 8-prover",
            "value": 136900146,
            "range": "± 3181456",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 9, RATE = 8-verifier",
            "value": 4589199,
            "range": "± 137095",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 12, RATE = 11-prover",
            "value": 188492894,
            "range": "± 1357639",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 12, RATE = 11-verifier",
            "value": 4977872,
            "range": "± 125196",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon/2-to-1",
            "value": 31356,
            "range": "± 309",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/510",
            "value": 133633,
            "range": "± 444",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/510",
            "value": 146134,
            "range": "± 521",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/510",
            "value": 236430,
            "range": "± 601",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/510",
            "value": 235961,
            "range": "± 721",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/520",
            "value": 136367,
            "range": "± 637",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/520",
            "value": 148822,
            "range": "± 551",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/520",
            "value": 238920,
            "range": "± 1191",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/520",
            "value": 238891,
            "range": "± 1243",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/1086",
            "value": 285511,
            "range": "± 967",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/1086",
            "value": 297094,
            "range": "± 2266",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/1086",
            "value": 387892,
            "range": "± 4904",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/1086",
            "value": 387702,
            "range": "± 4161",
            "unit": "ns/iter"
          },
          {
            "name": "double-and-add",
            "value": 2854073,
            "range": "± 41725",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/14",
            "value": 4730459,
            "range": "± 6479",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/15",
            "value": 8151729,
            "range": "± 14693",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/16",
            "value": 18134801,
            "range": "± 103213",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/17",
            "value": 32249093,
            "range": "± 101457",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/18",
            "value": 63149743,
            "range": "± 104722",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/3",
            "value": 10410,
            "range": "± 1923",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/4",
            "value": 8535,
            "range": "± 1551",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/5",
            "value": 14211,
            "range": "± 589",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/6",
            "value": 18420,
            "range": "± 867",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/7",
            "value": 26725,
            "range": "± 1856",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/8",
            "value": 45007,
            "range": "± 3014",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/9",
            "value": 91954,
            "range": "± 1490",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/10",
            "value": 162890,
            "range": "± 2205",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/11",
            "value": 297601,
            "range": "± 9380",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/12",
            "value": 572672,
            "range": "± 9344",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/13",
            "value": 1152588,
            "range": "± 17915",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/14",
            "value": 2380958,
            "range": "± 38031",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/15",
            "value": 5036701,
            "range": "± 62296",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/16",
            "value": 10655583,
            "range": "± 244327",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/17",
            "value": 22425272,
            "range": "± 570389",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/18",
            "value": 49306276,
            "range": "± 717485",
            "unit": "ns/iter"
          },
          {
            "name": "hash-to-curve/Pallas",
            "value": 29274,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "hash-to-curve/Vesta",
            "value": 29352,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/8",
            "value": 129472701,
            "range": "± 3552676",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/9",
            "value": 276283951,
            "range": "± 12305043",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/10",
            "value": 581896206,
            "range": "± 20624497",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/11",
            "value": 1196649473,
            "range": "± 28373942",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/12",
            "value": 2532719269,
            "range": "± 69729468",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/13",
            "value": 5495654733,
            "range": "± 120658204",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/14",
            "value": 11643904135,
            "range": "± 279831789",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/15",
            "value": 24509209830,
            "range": "± 575744171",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/16",
            "value": 51698539035,
            "range": "± 1054254889",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/8",
            "value": 84821280,
            "range": "± 908461",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/9",
            "value": 138619329,
            "range": "± 848858",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/10",
            "value": 237286766,
            "range": "± 2752873",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/11",
            "value": 417716052,
            "range": "± 2079007",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/12",
            "value": 760517280,
            "range": "± 2572079",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/13",
            "value": 1412591007,
            "range": "± 20244617",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/14",
            "value": 2658438023,
            "range": "± 6680046",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/15",
            "value": 5061797311,
            "range": "± 25455985",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/16",
            "value": 9747678079,
            "range": "± 27856342",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/8",
            "value": 4573778,
            "range": "± 43575",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/9",
            "value": 6628741,
            "range": "± 465017",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/10",
            "value": 10562864,
            "range": "± 175559",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/11",
            "value": 17369008,
            "range": "± 206332",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/12",
            "value": 29972689,
            "range": "± 454720",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/13",
            "value": 51810689,
            "range": "± 3438920",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/14",
            "value": 92678037,
            "range": "± 1291269",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/15",
            "value": 166433746,
            "range": "± 1179538",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/16",
            "value": 309369294,
            "range": "± 5415983",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}