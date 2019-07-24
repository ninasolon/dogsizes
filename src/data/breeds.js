const breeds = {
  "akita": {
    "pt_name": "akita",
    "en_name": "akita",
    "fullName": "akita",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/akita.png",
    "imageIpad": "/akita_white.png",
    "leash": ["g", "l"],
    "collar": ["g", "l"],
    "leash_ruff": ["g", "l"],
    "obedience": ["-", "-"],
    "stepin": ["g", "l"],
    "meshplus": ["g", "l"],
    "soft_walk": ["g", "l"]
  },
  "affenpinscher": {
    "pt_name": "affenpinscher",
    "en_name": "affenpinscher",
    "fullName": "affenpinscher",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/affenpinscher.png",
    "imageIpad": "/affenpinscher_white.png",
    "leash": ["pp", "xs"],
    "collar": ["pp", "xs"],
    "leash_ruff": ["-", "-"],
    "obedience": ["-", "-"],
    "stepin": ["-", "-"],
    "meshplus": ["pp", "xs"],
    "soft_walk": ["-", "-"]
  },
  "basenji": {
    "pt_name": "basenji",
    "en_name": "basenji",
    "fullName": "basenji",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/basenji.png",
    "imageIpad": "/basenji_white.png",
    "leash": ["p", "s"],
    "collar": ["m", "m"],
    "leash_ruff": ["p", "s"],
    "obedience": ["m", "m"],
    "stepin": ["m", "m"],
    "meshplus": ["m", "m"],
    "soft_walk": ["-", "-"]
  },
  "basset hound": {
    "pt_name": "basset hound",
    "en_name": "basset hound",
    "fullName": "basset_hound",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/basset_hound.png",
    "imageIpad": "/basset_hound_white.png",
    "leash": ["p", "s"],
    "collar": ["m", "m"],
    "leash_ruff": ["p", "s"],
    "obedience": ["m", "m"],
    "stepin": ["m", "m"],
    "meshplus": ["m", "m"],
    "soft_walk": ["-", "-"]
  },
  "beagle": {
    "pt_name": "beagle",
    "en_name": "beagle",
    "fullName": "beagle",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/beagle.png",
    "imageIpad": "/beagle_white.png",
    "leash": ["p", "s"],
    "collar": ["m", "m"],
    "leash_ruff": ["p", "s"],
    "obedience": ["m", "m"],
    "stepin": ["m", "m"],
    "meshplus": ["m", "m"],
    "soft_walk": ["p", "s"]
  },
  "bernese": {
    "pt_name": "bernese",
    "en_name": "bernese mountain dog",
    "fullName": "bernese_mountain_dog",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/bernese_mountain_dog.png",
    "imageIpad": "/bernese_mountain_dog_white.png",
    "leash": ["g", "l"],
    "collar": ["g", "l"],
    "leash_ruff": ["g", "l"],
    "obedience": ["-", "-"],
    "stepin": ["g", "l"],
    "meshplus": ["g", "l"],
    "soft_walk": ["g", "l"]
  },
  "bichon frisé": {
    "pt_name": "bichon frisé",
    "en_name": "bichon frisé",
    "fullName": "bichon_frise",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/bichon_frise.png",
    "imageIpad": "/bichon_frise_white.png",
    "leash": ["p", "s"],
    "collar": ["p", "s"],
    "leash_ruff": ["p", "s"],
    "obedience": ["p", "s"],
    "stepin": ["p", "s"],
    "meshplus": ["p", "s"],
    "soft_walk": ["-", "-"]
  },
  "bichon havanês": {
    "pt_name": "bichon havanês",
    "en_name": "bichon havanese",
    "fullName": "bichon_havanes",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/bichon_havanes.png",
    "imageIpad": "/bichon_havanes_white.png",
    "leash": ["p", "s"],
    "collar": ["p", "s"],
    "leash_ruff": ["p", "s"],
    "obedience": ["p", "s"],
    "stepin": ["p", "s"],
    "meshplus": ["m", "m"],
    "soft_walk": ["-", "-"]
  },
  "border collie": {
    "pt_name": "border collie",
    "en_name": "border collie",
    "fullName": "border_collie",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/border_collie.png",
    "imageIpad": "/border_collie_white.png",
    "leash": ["g", "l"],
    "collar": ["m", "m"],
    "leash_ruff": ["g", "l"],
    "obedience": ["m", "m"],
    "stepin": ["g", "l"],
    "meshplus": ["g", "l"],
    "soft_walk": ["m", "m"]
  },
  "boiadeiro australiano": {
    "pt_name": "boiadeiro australiano",
    "en_name": "australian cattle dog",
    "fullName": "pastor_boiadeiro",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/pastor_boiadeiro.png",
    "imageIpad": "/pastor_boiadeiro_white.png",
    "leash": ["g", "l"],
    "collar": ["m", "m"],
    "leash_ruff": ["g", "l"],
    "obedience": ["m", "m"],
    "stepin": ["g", "l"],
    "meshplus": ["g", "l"],
    "soft_walk": ["m", "m"]
  },
  "boston terrier": {
    "pt_name": "boston terrier",
    "en_name": "boston terrier",
    "fullName": "boston_terrier",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/boston_terrier.png",
    "imageIpad": "/boston_terrier_white.png",
    "leash": ["p", "s"],
    "collar": ["p", "s"],
    "leash_ruff": ["p", "s"],
    "obedience": ["p", "s"],
    "stepin": ["p", "s"],
    "meshplus": ["p", "s"],
    "soft_walk": ["-", "-"]
  },
  "boxer": {
    "pt_name": "boxer",
    "en_name": "boxer",
    "fullName": "boxer",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/boxer.png",
    "imageIpad": "/boxer_white.png",
    "leash": ["g", "l"],
    "collar": ["g", "l"],
    "leash_ruff": ["g", "l"],
    "obedience": ["-", "-"],
    "stepin": ["g", "l"],
    "meshplus": ["g", "l"],
    "soft_walk": ["g", "l"]
  },
  "bull terrier": {
    "pt_name": "bull terrier",
    "en_name": "bull terrier",
    "fullName": "bull_terrier",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/bull_terrier.png",
    "imageIpad": "/bull_terrier_white.png",
    "leash": ["g", "l"],
    "collar": ["g", "l"],
    "leash_ruff": ["g", "l"],
    "obedience": ["-", "-"],
    "stepin": ["g", "l"],
    "meshplus": ["g", "l"],
    "soft_walk": ["m", "m"]
  },
  "bulldog francês": {
    "pt_name": "bulldog francês",
    "en_name": "french bulldog",
    "fullName": "bulldog_frances",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/bulldog_frances.png",
    "imageIpad": "/bulldog_frances_white.png",
    "leash": ["g", "l"],
    "collar": ["m", "m"],
    "leash_ruff": ["p", "s"],
    "obedience": ["m", "m"],
    "stepin": ["m", "m"],
    "meshplus": ["m", "m"],
    "soft_walk": ["-", "-"]
  },
  "bulldog inglês": {
    "pt_name": "bulldog inglês",
    "en_name": "english bulldog",
    "fullName": "bulldog_ingles",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/bulldog_ingles.png",
    "imageIpad": "/bulldog_ingles_white.png",
    "leash": ["g", "l"],
    "collar": ["g", "l"],
    "leash_ruff": ["g", "l"],
    "obedience": ["-", "-"],
    "stepin": ["g", "l"],
    "meshplus": ["g", "l"],
    "soft_walk": ["m", "m"]
  },
  "cane corso italiano": {
    "pt_name": "cane corso italiano",
    "en_name": "italian cane corso ",
    "fullName": "cane_corso_italiano",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/cane_corso_italiano.png",
    "imageIpad": "/cane_corso_italiano_white.png",
    "leash": ["g", "l"],
    "collar": ["g", "l"],
    "leash_ruff": ["g", "l"],
    "obedience": ["-", "-"],
    "stepin": ["g", "l"],
    "meshplus": ["-", "-"],
    "soft_walk": ["g", "l"]
  },
  "cavalier king charles": {
    "pt_name": "cavalier king charles",
    "en_name": "cavalier king charles",
    "fullName": "cavalier_king_charles",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/cavalier_king_charles.png",
    "imageIpad": "/cavalier_king_charles_white.png",
    "leash": ["p", "s"],
    "collar": ["p", "s"],
    "leash_ruff": ["p", "s"],
    "obedience": ["p", "s"],
    "stepin": ["p", "s"],
    "meshplus": ["p", "s"],
    "soft_walk": ["p", "s"]
  },
  "chihuahua": {
    "pt_name": "chihuahua",
    "en_name": "chihuahua",
    "fullName": "chihuahua",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/chihuahua.png",
    "imageIpad": "/chihuahua_white.png",
    "leash": ["pp", "xs"],
    "collar": ["pp", "xs"],
    "leash_ruff": ["p", "s"],
    "obedience": ["p", "s"],
    "stepin": ["-", "-"],
    "meshplus": ["pp", "xs"],
    "soft_walk": ["-", "-"]
  },
  "chow chow": {
    "pt_name": "chow chow",
    "en_name": "chow chow",
    "fullName": "chow_chow",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/chow_chow.png",
    "imageIpad": "/chow_chow_white.png",
    "leash": ["g", "l"],
    "collar": ["g", "l"],
    "leash_ruff": ["g", "l"],
    "obedience": ["-", "-"],
    "stepin": ["g", "l"],
    "meshplus": ["g", "l"],
    "soft_walk": ["m", "m"]
  },
  "cocker spaniel": {
    "pt_name": "cocker spaniel",
    "en_name": "cocker spaniel",
    "fullName": "cocker_spaniel",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/cocker_spaniel.png",
    "imageIpad": "/cocker_spaniel_white.png",
    "leash": ["p", "s"],
    "collar": ["m", "m"],
    "leash_ruff": ["p", "s"],
    "obedience": ["m", "m"],
    "stepin": ["m", "m"],
    "meshplus": ["m", "m"],
    "soft_walk": ["p", "s"]
  },
  "collie": {
    "pt_name": "collie",
    "en_name": "collie",
    "fullName": "collie",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/collie.png",
    "imageIpad": "/collie_white.png",
    "leash": ["g", "l"],
    "collar": ["m", "m"],
    "leash_ruff": ["g", "l"],
    "obedience": ["m", "m"],
    "stepin": ["g", "l"],
    "meshplus": ["g", "l"],
    "soft_walk": ["m", "m"]
  },
  "welsh corgi": {
    "pt_name": "corgi",
    "en_name": "corgi",
    "fullName": "corgi",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/corgi.png",
    "imageIpad": "/corgi_white.png",
    "leash": ["p", "s"],
    "collar": ["m", "m"],
    "leash_ruff": ["p", "s"],
    "obedience": ["m", "m"],
    "stepin": ["m", "m"],
    "meshplus": ["m", "m"],
    "soft_walk": ["-", "-"]
  },
  "coton de tulear": {
    "pt_name": "coton de tulear",
    "en_name": "coton de tulear",
    "fullName": "coton_de_tulear",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/coton_de_tulear.png",
    "imageIpad": "/coton_de_tulear_white.png",
    "leash": ["p", "s"],
    "collar": ["p", "s"],
    "leash_ruff": ["p", "s"],
    "obedience": ["p", "s"],
    "stepin": ["m", "m"],
    "meshplus": ["p", "s"],
    "soft_walk": ["-", "-"]
  },
  "dálmata": {
    "pt_name": "dálmata",
    "en_name": "dalmatian",
    "fullName": "dalmata",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/dalmata.png",
    "imageIpad": "/dalmata_white.png",
    "leash": ["g", "l"],
    "collar": ["g", "l"],
    "leash_ruff": ["g", "l"],
    "obedience": ["-", "-"],
    "stepin": ["g", "l"],
    "meshplus": ["g", "l"],
    "soft_walk": ["m", "m"]
  },
  "dashsund": {
    "pt_name": "dachshund",
    "en_name": "dachshund",
    "fullName": "dachshund",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/dachshund.png",
    "imageIpad": "/dachshund_white.png",
    "leash": ["p", "s"],
    "collar": ["p", "s"],
    "leash_ruff": ["p", "s"],
    "obedience": ["p", "s"],
    "stepin": ["p", "s"],
    "meshplus": ["p", "s"],
    "soft_walk": ["-", "-"]
  },
  "dobermann": {
    "pt_name": "dobermann",
    "en_name": "dobermann",
    "fullName": "doberman",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/doberman.png",
    "imageIpad": "/doberman_white.png",
    "leash": ["g", "l"],
    "collar": ["m", "m"],
    "leash_ruff": ["g", "l"],
    "obedience": ["m", "m"],
    "stepin": ["g", "l"],
    "meshplus": ["g", "l"],
    "soft_walk": ["m", "m"]
  },
  "dogo argentino": {
    "pt_name": "dogo argentino",
    "en_name": "argentine dogo",
    "fullName": "dogo_argentino",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/dogo_argentino.png",
    "imageIpad": "/dogo_argentino_white.png",
    "leash": ["g", "l"],
    "collar": ["g", "l"],
    "leash_ruff": ["g", "l"],
    "obedience": ["-", "-"],
    "stepin": ["g", "l"],
    "meshplus": ["-", "-"],
    "soft_walk": ["g", "l"]
  },
  "dogue alemão": {
    "pt_name": "dogue alemão",
    "en_name": "great dane",
    "fullName": "dogue_alemao",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/dogue_alemao.png",
    "imageIpad": "/dogue_alemao_white.png",
    "leash": ["g", "l"],
    "collar": ["g", "l"],
    "leash_ruff": ["g", "l"],
    "obedience": ["-", "-"],
    "stepin": ["-", "-"],
    "meshplus": ["-", "-"],
    "soft_walk": ["g", "l"]
  },
  "fox terrier": {
    "pt_name": "fox terrier",
    "en_name": "fox terrier",
    "fullName": "fox_terrier",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/fox_terrier.png",
    "imageIpad": "/fox_terrier_white.png",
    "leash": ["p", "s"],
    "collar": ["p", "s"],
    "leash_ruff": ["p", "s"],
    "obedience": ["p", "s"],
    "stepin": ["p", "s"],
    "meshplus": ["p", "s"],
    "soft_walk": ["-", "-"]
  },
  "foxhound": {
    "pt_name": "foxhound",
    "en_name": "foxhound",
    "fullName": "foxhound",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/foxhound.png",
    "imageIpad": "/foxhound_white.png",
    "leash": ["g", "l"],
    "collar": ["m", "m"],
    "leash_ruff": ["g", "l"],
    "obedience": ["m", "m"],
    "stepin": ["g", "l"],
    "meshplus": ["g", "l"],
    "soft_walk": ["m", "m"]
  },
  "galgo": {
    "pt_name": "galgo",
    "en_name": "greyhound",
    "fullName": "galgo",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/galgo.png",
    "imageIpad": "/galgo_white.png",
    "leash": ["p", "s"],
    "collar": ["pp", "xs"],
    "leash_ruff": ["p", "s"],
    "obedience": ["-", "-"],
    "stepin": ["p", "s"],
    "meshplus": ["-", "-"],
    "soft_walk": ["-", "-"]
  },
  "golden retriever": {
    "pt_name": "golden retriever",
    "en_name": "golden retriever",
    "fullName": "golden_retriever",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/golden_retriever.png",
    "imageIpad": "/golden_retriever_white.png",
    "leash": ["g", "l"],
    "collar": ["g", "l"],
    "leash_ruff": ["g", "l"],
    "obedience": ["-", "-"],
    "stepin": ["g", "l"],
    "meshplus": ["g", "l"],
    "soft_walk": ["g", "l"]
  },
  "griffon de bruxelas": {
    "pt_name": "griffon de bruxelas",
    "en_name": "brussels griffon",
    "fullName": "griffon_bruxelas",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/griffon_bruxelas.png",
    "imageIpad": "/griffon_bruxelas_white.png",
    "leash": ["p", "s"],
    "collar": ["pp", "xs"],
    "leash_ruff": ["p", "s"],
    "obedience": ["p", "s"],
    "stepin": ["p", "s"],
    "meshplus": ["pp", "xs"],
    "soft_walk": ["-", "-"]
  },
  "husky siberiano": {
    "pt_name": "husky siberiano",
    "en_name": "siberian husky",
    "fullName": "husky_siberiano",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/husky_siberiano.png",
    "imageIpad": "/husky_siberiano_white.png",
    "leash": ["g", "l"],
    "collar": ["g", "l"],
    "leash_ruff": ["g", "l"],
    "obedience": ["-", "-"],
    "stepin": ["g", "l"],
    "meshplus": ["g", "l"],
    "soft_walk": ["m", "m"]
  },
  "jack russel": {
    "pt_name": "jack russell",
    "en_name": "jack russell",
    "fullName": "jack_russel",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/jack_russel.png",
    "imageIpad": "/jack_russel_white.png",
    "leash": ["p", "s"],
    "collar": ["p", "s"],
    "leash_ruff": ["p", "s"],
    "obedience": ["p", "s"],
    "stepin": ["p", "s"],
    "meshplus": ["p", "s"],
    "soft_walk": ["-", "-"]
  },
  "kuvasz": {
    "pt_name": "kuvasz",
    "en_name": "kuvasz",
    "fullName": "kuvasz",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/kuvasz.png",
    "imageIpad": "/kuvasz_white.png",
    "leash": ["g", "l"],
    "collar": ["g", "l"],
    "leash_ruff": ["g", "l"],
    "obedience": ["-", "-"],
    "stepin": ["-", "-"],
    "meshplus": ["-", "-"],
    "soft_walk": ["g", "l"]
  },
  "labrador retriever": {
    "pt_name": "labrador",
    "en_name": "labrador retriever",
    "fullName": "labrador_retriever",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/labrador_retriever.png",
    "imageIpad": "/labrador_retriever_white.png",
    "leash": ["g", "l"],
    "collar": ["g", "l"],
    "leash_ruff": ["g", "l"],
    "obedience": ["-", "-"],
    "stepin": ["g", "l"],
    "meshplus": ["g", "l"],
    "soft_walk": ["g", "l"]
  },
  "lhasa apso": {
    "pt_name": "llhasa apso",
    "en_name": "lhasa apso",
    "fullName": "lhasa_apso",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/lhasa_apso.png",
    "imageIpad": "/lhasa_apso_white.png",
    "leash": ["p", "s"],
    "collar": ["p", "s"],
    "leash_ruff": ["p", "s"],
    "obedience": ["p", "s"],
    "stepin": ["p", "s"],
    "meshplus": ["p", "s"],
    "soft_walk": ["-", "-"]
  },
  "lulu da pomerânia": {
    "pt_name": "lulu da pomerânia",
    "en_name": "pomeranian",
    "fullName": "lulu_da_pomerania",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/lulu_da_pomerania.png",
    "imageIpad": "/lulu_da_pomerania_white.png",
    "leash": ["pp", "xs"],
    "collar": ["pp", "xs"],
    "leash_ruff": ["p", "s"],
    "obedience": ["p", "s"],
    "stepin": ["p", "s"],
    "meshplus": ["pp", "xs"],
    "soft_walk": ["-", "-"]
  },
  "malamute-do-alasca": {
    "pt_name": "malamute do alasca",
    "en_name": "alaskan malamute",
    "fullName": "malamute_do_alasca",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/malamute_do_alasca.png",
    "imageIpad": "/malamute_do_alasca_white.png",
    "leash": ["g", "l"],
    "collar": ["g", "l"],
    "leash_ruff": ["g", "l"],
    "obedience": ["-", "-"],
    "stepin": ["-", "-"],
    "meshplus": ["-", "-"],
    "soft_walk": ["g", "l"]
  },
  "maltês": {
    "pt_name": "maltês",
    "en_name": "maltese",
    "fullName": "maltes",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/maltes.png",
    "imageIpad": "/maltes_white.png",
    "leash": ["p", "s"],
    "collar": ["p", "s"],
    "leash_ruff": ["p", "s"],
    "obedience": ["p", "s"],
    "stepin": ["p", "s"],
    "meshplus": ["p", "s"],
    "soft_walk": ["-", "-"]
  },
  "new zealand huntaway": {
    "pt_name": "pastor da nova zelândia",
    "en_name": "new zealand huntaway",
    "fullName": "new-zealand-huntaway",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/new-zealand-huntaway.png",
    "imageIpad": "/new_zealand_huntaway_white.png",
    "leash": ["g", "l"],
    "collar": ["g", "l"],
    "leash_ruff": ["g", "l"],
    "obedience": ["-", "-"],
    "stepin": ["g", "l"],
    "meshplus": ["g", "l"],
    "soft_walk": ["g", "l"]
  },
  "norfolk terrier": {
    "pt_name": "norfolk terrier",
    "en_name": "norfolk terrier",
    "fullName": "norfolk_terrier",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/norfolk_terrier.png",
    "imageIpad": "/norfolk_terrier_white.png",
    "leash": ["p", "s"],
    "collar": ["p", "s"],
    "leash_ruff": ["p", "s"],
    "obedience": ["p", "s"],
    "stepin": ["p", "s"],
    "meshplus": ["p", "s"],
    "soft_walk": ["-", "-"]
  },
  "nova scotia d.t.r.": {
    "pt_name": "nova scotia dtr",
    "en_name": "nova scotia dtr",
    "fullName": "nova_scotia_DTR",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/nova_scotia_DTR.png",
    "imageIpad": "/nova_scotia_DTR_white.png",
    "leash": ["p", "s"],
    "collar": ["m", "m"],
    "leash_ruff": ["p", "s"],
    "obedience": ["m", "m"],
    "stepin": ["m", "m"],
    "meshplus": ["m", "m"],
    "soft_walk": ["p", "s"]
  },
  "old english sheepdog": {
    "pt_name": "pastor inglês",
    "en_name": "old english sheepdog",
    "fullName": "pastor_ingles_antigo",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/pastor_ingles_antigo.png",
    "imageIpad": "/pastor_ingles_antigo_white.png",
    "leash": ["g", "l"],
    "collar": ["g", "l"],
    "leash_ruff": ["g", "l"],
    "obedience": ["-", "-"],
    "stepin": ["g", "l"],
    "meshplus": ["-", "-"],
    "soft_walk": ["g", "l"]
  },
  "australian shepard": {
    "pt_name": "pastor australiano",
    "en_name": "australian shepherd",
    "fullName": "australian_shepherd",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/australian_shepherd.png",
    "imageIpad": "/australian_shepherd_white.png",
    "leash": ["g", "l"],
    "collar": ["m", "m"],
    "leash_ruff": ["g", "l"],
    "obedience": ["m", "m"],
    "stepin": ["g", "l"],
    "meshplus": ["g", "l"],
    "soft_walk": ["m", "m"]
  },
  "pastor alemão": {
    "pt_name": "pastor alemão",
    "en_name": "german shepherd",
    "fullName": "pastor_alemao",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/pastor_alemao.png",
    "imageIpad": "/pastor_alemao_white.png",
    "leash": ["g", "l"],
    "collar": ["g", "l"],
    "leash_ruff": ["g", "l"],
    "obedience": ["-", "-"],
    "stepin": ["g", "l"],
    "meshplus": ["g", "l"],
    "soft_walk": ["g", "l"]
  },
  "pastor belga": {
    "pt_name": "pastor belga",
    "en_name": "belgian shepherd",
    "fullName": "pastor_belga",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/pastor_belga.png",
    "imageIpad": "/pastor_belga_white.png",
    "leash": ["g", "l"],
    "collar": ["g", "l"],
    "leash_ruff": ["g", "l"],
    "obedience": ["-", "-"],
    "stepin": ["g", "l"],
    "meshplus": ["g", "l"],
    "soft_walk": ["g", "l"]
  },
  "pastor branco suiço": {
    "pt_name": "pastor branco suiço",
    "en_name": "white shepherd",
    "fullName": "pastor_branco_suico",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/pastor_branco_suico.png",
    "imageIpad": "/pastor_branco_suico_white.png",
    "leash": ["g", "l"],
    "collar": ["g", "l"],
    "leash_ruff": ["g", "l"],
    "obedience": ["-", "-"],
    "stepin": ["g", "l"],
    "meshplus": ["g", "l"],
    "soft_walk": ["g", "l"]
  },
  "pastor de shetland": {
    "pt_name": "pastor de shetland",
    "en_name": "shetland shepherd",
    "fullName": "pastor_de_shetland",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/pastor_de_shetland.png",
    "imageIpad": "/pastor_de_shetland_white.png",
    "leash": ["p", "s"],
    "collar": ["p", "s"],
    "leash_ruff": ["p", "s"],
    "obedience": ["p", "s"],
    "stepin": ["m", "m"],
    "meshplus": ["m", "m"],
    "soft_walk": ["p", "s"]
  },
  "pequinês": {
    "pt_name": "pequinês",
    "en_name": "pequinese",
    "fullName": "pequines",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/pequines.png",
    "imageIpad": "/pequines_white.png",
    "leash": ["p", "s"],
    "collar": ["p", "s"],
    "leash_ruff": ["p", "s"],
    "obedience": ["p", "s"],
    "stepin": ["p", "s"],
    "meshplus": ["p", "s"],
    "soft_walk": ["-", "-"]
  },
  "pointer": {
    "pt_name": "perdigueiro",
    "en_name": "pointer",
    "fullName": "perdigueiro",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/perdigueiro.png",
    "imageIpad": "/perdigueiro_white.png",
    "leash": ["g", "l"],
    "collar": ["m", "m"],
    "leash_ruff": ["g", "l"],
    "obedience": ["-", "-"],
    "stepin": ["g", "l"],
    "meshplus": ["g", "l"],
    "soft_walk": ["m", "m"]
  },
  "pinscher": {
    "pt_name": "pinscher",
    "en_name": "pinscher",
    "fullName": "pinscher",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/pinscher.png",
    "imageIpad": "/pinscher_white.png",
    "leash": ["pp", "xs"],
    "collar": ["pp", "xs"],
    "leash_ruff": ["p", "s"],
    "obedience": ["p", "s"],
    "stepin": ["-", "-"],
    "meshplus": ["pp", "xs"],
    "soft_walk": ["-", "-"]
  },
  "pitbull": {
    "pt_name": "pitbull",
    "en_name": "american pitbull terrier",
    "fullName": "pitbull",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/pitbull.png",
    "imageIpad": "/pitbull_white.png",
    "leash": ["g", "l"],
    "collar": ["g", "l"],
    "leash_ruff": ["g", "l"],
    "obedience": ["-", "-"],
    "stepin": ["g", "l"],
    "meshplus": ["g", "l"],
    "soft_walk": ["m", "m"]
  },
  "poodle": {
    "pt_name": "poodle",
    "en_name": "poodle",
    "fullName": "poodle",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/poodle.png",
    "imageIpad": "/poodle_white.png",
    "leash": ["p", "s"],
    "collar": ["p", "s"],
    "leash_ruff": ["p", "s"],
    "obedience": ["p", "s"],
    "stepin": ["p", "s"],
    "meshplus": ["p", "s"],
    "soft_walk": ["-", "-"]
  },
  "pug": {
    "pt_name": "pug",
    "en_name": "pug",
    "fullName": "pug",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/pug.png",
    "imageIpad": "/pug_white.png",
    "leash": ["p", "s"],
    "collar": ["m", "m"],
    "leash_ruff": ["p", "s"],
    "obedience": ["-", "-"],
    "stepin": ["m", "m"],
    "meshplus": ["m", "m"],
    "soft_walk": ["-", "-"]
  },
  "rhodesian ridgeback": {
    "pt_name": "leão da rodésia",
    "en_name": "rhodesian ridgeback",
    "fullName": "leao_da_rodesia",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/leao_da_rodesia.png",
    "imageIpad": "/leao_da_rodesia_white.png",
    "leash": ["g", "l"],
    "collar": ["g", "l"],
    "leash_ruff": ["g", "l"],
    "obedience": ["-", "-"],
    "stepin": ["-", "-"],
    "meshplus": ["-", "-"],
    "soft_walk": ["g", "l"]
  },
  "rottweiler": {
    "pt_name": "rottweiler",
    "en_name": "rottweiler",
    "fullName": "rottweiler",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/rottweiler.png",
    "imageIpad": "/rottweiler_white.png",
    "leash": ["g", "l"],
    "collar": ["g", "l"],
    "leash_ruff": ["g", "l"],
    "obedience": ["-", "-"],
    "stepin": ["g", "l"],
    "meshplus": ["-", "-"],
    "soft_walk": ["g", "l"]
  },
  "samoieda": {
    "pt_name": "samoieda",
    "en_name": "samoieda",
    "fullName": "samoieda",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/samoieda.png",
    "imageIpad": "/samoieda_white.png",
    "leash": ["g", "l"],
    "collar": ["m", "m"],
    "leash_ruff": ["g", "l"],
    "obedience": ["-", "-"],
    "stepin": ["g", "l"],
    "meshplus": ["g", "l"],
    "soft_walk": ["g", "l"]
  },
  "são bernardo": {
    "pt_name": "são bernardo",
    "en_name": "saint bernard",
    "fullName": "sao_bernardo",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/sao_bernardo.png",
    "imageIpad": "/sao_bernardo_white.png",
    "leash": ["g", "l"],
    "collar": ["g", "l"],
    "leash_ruff": ["g", "l"],
    "obedience": ["-", "-"],
    "stepin": ["-", "-"],
    "meshplus": ["-", "-"],
    "soft_walk": ["g", "l"]
  },
  "schanuzer": {
    "pt_name": "schnauzer",
    "en_name": "schnauzer",
    "fullName": "schnauzer",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/schnauzer.png",
    "imageIpad": "/schnauzer_white.png",
    "leash": ["p", "s"],
    "collar": ["p", "s"],
    "leash_ruff": ["p", "s"],
    "obedience": ["p", "s"],
    "stepin": ["p", "s"],
    "meshplus": ["p", "s"],
    "soft_walk": ["-", "-"]
  },
  "scottish terrier": {
    "pt_name": "scottish terrier",
    "en_name": "scottish terrier",
    "fullName": "scottish_terrier",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/scottish_terrier.png",
    "imageIpad": "/scottish_terrier_white.png",
    "leash": ["p", "s"],
    "collar": ["p", "s"],
    "leash_ruff": ["p", "s"],
    "obedience": ["p", "s"],
    "stepin": ["p", "s"],
    "meshplus": ["p", "s"],
    "soft_walk": ["-", "-"]
  },
  "setter irlandés": {
    "pt_name": "setter irlandês",
    "en_name": "irish red setter",
    "fullName": "setter_irlandes",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/setter_irlandes.png",
    "imageIpad": "/setter_irlandes_white.png",
    "leash": ["g", "l"],
    "collar": ["g", "l"],
    "leash_ruff": ["g", "l"],
    "obedience": ["m", "m"],
    "stepin": ["g", "l"],
    "meshplus": ["g", "l"],
    "soft_walk": ["m", "m"]
  },
  "american staffordshire": {
    "pt_name": "staffordshire",
    "en_name": "american staffordshire terrier",
    "fullName": "american_staffordshire_terrier",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/american_staffordshire_terrier.png",
    "imageIpad": "/american_staffordshire_terrier_white.png",
    "leash": ["g", "l"],
    "collar": ["g", "l"],
    "leash_ruff": ["g", "l"],
    "obedience": ["-", "-"],
    "stepin": ["g", "l"],
    "meshplus": ["m", "m"],
    "soft_walk": ["m", "m"]
  },
  "staff bull terrier": {
    "pt_name": "staffordshire bull terrier",
    "en_name": "staffordshire bull terrier",
    "fullName": "staffordshire_bull_terrier",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/staffordshire_bull_terrier.png",
    "imageIpad": "/staffordshire_bull_terrier_white.png",
    "leash": ["g", "l"],
    "collar": ["g", "l"],
    "leash_ruff": ["g", "l"],
    "obedience": ["-", "-"],
    "stepin": ["g", "l"],
    "meshplus": ["g", "l"],
    "soft_walk": ["m", "m"]
  },
  "shar-pei": {
    "pt_name": "shar pei",
    "en_name": "shar pei",
    "fullName": "shar_pei",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/shar_pei.png",
    "imageIpad": "/shar_pei_white.png",
    "leash": ["g", "l"],
    "collar": ["g", "l"],
    "leash_ruff": ["g", "l"],
    "obedience": ["-", "-"],
    "stepin": ["g", "l"],
    "meshplus": ["g", "l"],
    "soft_walk": ["m", "m"]
  },
  "shih-tzu": {
    "pt_name": "shih tzu",
    "en_name": "shih tzu",
    "fullName": "shih_tzu",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/shih_tzu.png",
    "imageIpad": "/shih_tzu_white.png",
    "leash": ["p", "s"],
    "collar": ["p", "s"],
    "leash_ruff": ["p", "s"],
    "obedience": ["p", "s"],
    "stepin": ["p", "s"],
    "meshplus": ["p", "s"],
    "soft_walk": ["-", "-"]
  },
  "shiba inu": {
    "pt_name": "shiba inu",
    "en_name": "shiba inu",
    "fullName": "shiba_inu",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/shiba_inu.png",
    "imageIpad": "/shiba_inu_white.png",
    "leash": ["p", "s"],
    "collar": ["m", "m"],
    "leash_ruff": ["p", "s"],
    "obedience": ["m", "m"],
    "stepin": ["m", "m"],
    "meshplus": ["m", "m"],
    "soft_walk": ["p", "s"]
  },
  "spitz alemão": {
    "pt_name": "spitz alemão",
    "en_name": "german spitz",
    "fullName": "spitz_alemao",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/spitz_alemao.png",
    "imageIpad": "/spitz_alemao_white.png",
    "leash": ["pp", "xs"],
    "collar": ["pp", "xs"],
    "leash_ruff": ["p", "s"],
    "obedience": ["p", "s"],
    "stepin": ["p", "s"],
    "meshplus": ["pp", "xs"],
    "soft_walk": ["-", "-"]
  },
  "spitz japonês": {
    "pt_name": "spitz japonês",
    "en_name": "japanese spitz",
    "fullName": "spitz_japones",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/spitz_japones.png",
    "imageIpad": "/spitz_japones_white.png",
    "leash": ["p", "s"],
    "collar": ["p", "s"],
    "leash_ruff": ["p", "s"],
    "obedience": ["p", "s"],
    "stepin": ["m", "m"],
    "meshplus": ["m", "m"],
    "soft_walk": ["p", "s"]
  },
  "srd": {
    "pt_name": "SRD",
    "en_name": "mutt",
    "fullName": "srd",
    "info": "Você tem um SRD? Irado! Como são únicos e exclusivos, selecione a raça que tenha o porte mais parecido com ele para saber os melhores tamanhos dos produtos."
  },
  "teckel": {
    "pt_name": "teckel",
    "en_name": "teckel",
    "fullName": "teckel",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/teckel.png",
    "imageIpad": "/teckel_white.png",
    "leash": ["p", "s"],
    "collar": ["p", "s"],
    "leash_ruff": ["p", "s"],
    "obedience": ["p", "s"],
    "stepin": ["p", "s"],
    "meshplus": ["p", "s"],
    "soft_walk": ["-", "-"]
  },
  "terra-nova": {
    "pt_name": "terra-nova",
    "en_name": "newfoundland",
    "fullName": "terra_nova",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/terra_nova.png",
    "imageIpad": "/terra_nova_white.png",
    "leash": ["g", "l"],
    "collar": ["g", "l"],
    "leash_ruff": ["g", "l"],
    "obedience": ["-", "-"],
    "stepin": ["g", "l"],
    "meshplus": ["-", "-"],
    "soft_walk": ["g", "l"]
  },
  "terrier brasileiro": {
    "pt_name": "terrier brasileiro",
    "en_name": "brazilian terrier",
    "fullName": "terrier_brasileiro",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/terrier_brasileiro.png",
    "imageIpad": "/terrier_brasileiro_white.png",
    "leash": ["p", "s"],
    "collar": ["p", "s"],
    "leash_ruff": ["p", "s"],
    "obedience": ["p", "s"],
    "stepin": ["p", "s"],
    "meshplus": ["p", "s"],
    "soft_walk": ["-", "-"]
  },
  "terrier tibetano": {
    "pt_name": "terrier tibetano",
    "en_name": "tibetan terrier",
    "fullName": "terrier_tibetano",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/terrier_tibetano.png",
    "imageIpad": "/terrier_tibetano_white.png",
    "leash": ["p", "s"],
    "collar": ["p", "s"],
    "leash_ruff": ["p", "s"],
    "obedience": ["p", "s"],
    "stepin": ["m", "m"],
    "meshplus": ["m", "m"],
    "soft_walk": ["p", "s"]
  },
  "vira-lata": {
    "pt_name": "Vira-lata",
    "en_name": "mutt",
    "fullName": "vira-lata",
    "info": "Você tem um Vira-lata? Irado! Como são únicos e exclusivos, selecione a raça que tenha o porte mais parecido com ele para saber os melhores tamanhos dos produtos."
  },
  "vizsla": {
    "pt_name": "vizsla",
    "en_name": "vizsla",
    "fullName": "vizsla",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/vizsla.png",
    "imageIpad": "/vizsla_white.png",
    "leash": ["g", "l"],
    "collar": ["m", "m"],
    "leash_ruff": ["g", "l"],
    "obedience": ["m", "m"],
    "stepin": ["g", "l"],
    "meshplus": ["g", "l"],
    "soft_walk": ["m", "m"]
  },
  "weimaraner": {
    "pt_name": "weimaraner",
    "en_name": "weimaraner",
    "fullName": "weimaraner",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/weimaraner.png",
    "imageIpad": "/weimaraner_white.png",
    "leash": ["g", "l"],
    "collar": ["m", "m"],
    "leash_ruff": ["g", "l"],
    "obedience": ["m", "m"],
    "stepin": ["g", "l"],
    "meshplus": ["g", "l"],
    "soft_walk": ["m", "m"]
  },
  "west highland": {
    "pt_name": "west highland terrier",
    "en_name": "west highland terrier",
    "fullName": "west_highland_terrier",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/west_highland_terrier.png",
    "imageIpad": "/west_highland_terrier_white.png",
    "leash": ["p", "s"],
    "collar": ["p", "s"],
    "leash_ruff": ["p", "s"],
    "obedience": ["p", "s"],
    "stepin": ["m", "m"],
    "meshplus": ["p", "s"],
    "soft_walk": ["-", "-"]
  },
  "whippet": {
    "pt_name": "whippet",
    "en_name": "whippet",
    "fullName": "whippet",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/whippet.png",
    "imageIpad": "/whippet_white.png",
    "leash": ["p", "s"],
    "collar": ["pp", "xs"],
    "leash_ruff": ["p", "s"],
    "obedience": ["-", "-"],
    "stepin": ["p", "s"],
    "meshplus": ["-", "-"],
    "soft_walk": ["-", "-"]
  },
  "yorkshire": {
    "pt_name": "yorkshire",
    "en_name": "yorkshire",
    "fullName": "yorkshire",
    "image": "https://s3-sa-east-1.amazonaws.com/zee.dog/athena/images/yorkshire.png",
    "imageIpad": "/yorkshire_white.png",
    "leash": ["pp", "xs"],
    "collar": ["pp", "xs"],
    "leash_ruff": ["p", "s"],
    "obedience": ["p", "s"],
    "stepin": ["p", "s"],
    "meshplus": ["pp", "xs"],
    "soft_walk": ["-", "-"]
  }
}

const data = Object.entries(breeds)

export default data