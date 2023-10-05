from app import app
from models import db, Agency, Consultation



if __name__ == '__main__':
    with app.app_context():
        print('clearing db...')

        Agency.query.delete()
        #SafetyPlan.query.delete()
        Consultation.query.delete()

        print("seeding services")

        agencies = [
                    Agency(
                        name= "Caribbean Women's Health Association",
                        image= "https://i.ibb.co/7GKXYy4/health-service.jpg",
                        fulladdress= '3512 Church Ave, Brooklyn, NY 11203',
                        zipcode= '11203',
                        category= 'Health',
                        phone= '(929) 399-8070',
                        google_maps_url= 'https://www.google.com/maps?cid=7843232131024550576',
                        latitude= 40.6508948,
                        longitude= -73.9443297,
                        website= 'http://www.cwha.org/',
                        opening_hours= 'Saturday: [Closed], Sunday: [Closed], Monday: [9 AM-5 PM], Tuesday: [9 AM-5 PM], Wednesday: [9 AM-5 PM], Thursday: [9 AM-5 PM], Friday: [9 AM-5 PM]'
                        ),
                    Agency(
                        name= '1DA Woman Inc.',
                        image= "https://i.ibb.co/7GKXYy4/health-service.jpg",
                        fulladdress= '210 E 42nd St, Brooklyn, NY 11203',
                        zipcode= '11203',
                        category= 'Health',
                        phone= '(347) 441-0518',
                        google_maps_url= 'https://www.google.com/maps?cid=7341578401357206014',
                        latitude= 40.6506944,
                        longitude= -73.9382687,
                        website= 'http://1dawomaninc.org/',
                        opening_hours= 'Saturday: [9 AM-5 PM], Sunday: [9 AM-5 PM], Monday: [9 AM-5 PM], Tuesday: [9 AM-5 PM], Wednesday: [9 AM-5 PM], Thursday: [9 AM-5 PM], Friday: [9 AM-5 PM]'
                        ),
                    Agency(
                        name= 'Womens Empowerment Coalition Of NYC',
                        image= "https://i.ibb.co/7GKXYy4/health-service.jpg",
                        fulladdress= '437 77th St, Brooklyn, NY 11209',
                        zipcode= '11209',
                        category= 'Health',
                        phone= '(347) 560-6787',
                        google_maps_url= 'https://www.google.com/maps?cid=3395079965897999146',
                        latitude= 40.6290019,
                        longitude= -74.0245254,
                        website= 'http://www.wecnyc.org/',
                        opening_hours= 'Saturday: [Closed], Sunday: [Closed], Monday: [10 AM-5 PM], Tuesday: [10 AM-5 PM], Wednesday: [10 AM-5 PM], Thursday: [10 AM-5 PM], Friday: [10 AM-5 PM]'
                        ),
                    Agency(
                        name= 'HELP Brownsville Womens Center',
                        image= "https://i.ibb.co/7GKXYy4/health-service.jpg",
                        fulladdress= '357 Saratoga Ave, Brooklyn, NY 11233',
                        zipcode= '11233',
                        category= 'Health',
                        phone= '(718) 345-3649',
                        google_maps_url= 'https://www.google.com/maps?cid=6376887518772597361',
                        latitude= 40.6735867,
                        longitude= -73.9165754,
                        website= 'unavailable',
                        opening_hours= 'Open 24/7'
                        ),
                    Agency(
                        name= 'Ms. Foundation For Women',
                        image= "https://i.ibb.co/7GKXYy4/health-service.jpg",
                        fulladdress= '1 Willoughby St Suite 2000, Brooklyn, NY 11201',
                        zipcode= '11201',
                        category= 'Health',
                        phone= '(212) 742-2300',
                        google_maps_url= 'https://www.google.com/maps?cid=9944034875763723175',
                        latitude= 40.6922647,
                        longitude= -73.9882024,
                        website= 'https://forwomen.org/',
                        opening_hours= 'Saturday: [Closed], Sunday: [Closed], Monday: [9 AM-5 PM], Tuesday: [9 AM-5 PM], Wednesday: [9 AM-5 PM], Thursday: [9 AM-5 PM], Friday: [9 AM-5 PM]'
                        ),
                    Agency(
                        name= 'Advice For Women Inc',
                        image= "https://i.ibb.co/7GKXYy4/health-service.jpg",
                        fulladdress= '301 39th St, Brooklyn, NY 11232',
                        zipcode= '11232',
                        category= 'Health',
                        phone= '(718) 788-2023',
                        google_maps_url= 'https://www.google.com/maps?cid=14359376581609598559',
                        latitude= 40.6538331,
                        longitude= -74.007763,
                        website= 'Not Available',
                        opening_hours= 'Contact  for Hours'
                        ),
                    Agency(
                        name= 'Makor Womens League',
                        image= "https://i.ibb.co/7GKXYy4/health-service.jpg",
                        fulladdress= '654 E 7th St, Brooklyn, NY 11218',
                        zipcode= '11218',
                        category= 'Health',
                        phone= '(718) 436-5182',
                        google_maps_url= 'https://www.google.com/maps?cid=7689948902765208179',
                        latitude= 40.635636,
                        longitude= -73.971538,
                        website= 'https://www.makordisabilityservices.org/',
                        opening_hours= 'Contact  for Hours'
                        ),
                    Agency(
                        name= "PHS Fort Greene Center (formerly MIC Women's Health Services)",
                        image= "https://i.ibb.co/7GKXYy4/health-service.jpg",
                        fulladdress= '295 Flatbush Ave Ext 3rd floor, Brooklyn, NY 11201',
                        zipcode= '11201',
                        category= 'Health',
                        phone= '(718) 522-1144',
                        google_maps_url= 'https://www.google.com/maps?cid=16440678730246073746',
                        latitude= 40.691766,
                        longitude= -73.982016,
                        website= 'https://www.healthsolutions.org/srhcenter',
                        opening_hours= 'Saturday: [Closed], Sunday: [Closed], Monday: [9 AM-5 PM], Tuesday: [9 AM-5 PM], Wednesday: [9 AM-5 PM], Thursday: [9 AM-7 PM], Friday: [9 AM-5 PM]'
                        ),
                    Agency(
                        name= "PHS Brownsville Center (formerly MIC Women's Health Services)",
                        image= "https://i.ibb.co/7GKXYy4/health-service.jpg",
                        fulladdress= '1873 Eastern Pkwy, Brooklyn, NY 11233',
                        zipcode= '11233',
                        category= 'Health',
                        phone= '(718) 498-1001',
                        google_maps_url= 'https://www.google.com/maps?cid=5358857553940373235',
                        latitude= 40.6767736,
                        longitude= -73.9084107,
                        website= 'http://www.healthsolutions.org/',
                        opening_hours= 'Saturday: [Closed], Sunday: [Closed], Monday: [9 AM-4:30 PM], Tuesday: [9 AM-4:30 PM], Wednesday: [9 AM-4:30 PM], Thursday: [9 AM-4:30 PM], Friday: [9 AM-4:30 PM]'
                        ),
                    Agency(
                        name= 'National Council-Jewish Women',
                        image= "https://i.ibb.co/7GKXYy4/health-service.jpg",
                        fulladdress= '1001 Quentin Rd, Brooklyn, NY 11223',
                        zipcode= '11223',
                        category= 'Health',
                        phone= '(718) 376-8164',
                        google_maps_url= 'https://www.google.com/maps?cid=166803202160488267',
                        latitude= 40.6079811,
                        longitude= -73.9628436,
                        website= 'Not Available',
                        opening_hours= 'Contact  for Hours'
                        ),
                    Agency(
                        name= 'Brooklyn Bar Association Volunteer Lawyers Project, Inc.',
                        image= 'https://i.ibb.co/4VpZ6M7/Legal-Services.jpg',
                        fulladdress= '44 Court St #1206, Brooklyn, NY 11201',
                        zipcode= '11201',
                        category= 'Legal services',
                        phone= '(718) 624-3894',
                        google_maps_url= 'https://www.google.com/maps?cid=6902340668644049206',
                        latitude= 40.6927556,
                        longitude= -73.9913129,
                        website= 'http://www.brooklynvlp.org/',
                        opening_hours= 'Saturday: [Closed], Sunday: [Closed], Monday: [9:30 AM-5:30 PM], Tuesday: [9:30 AM-5:30 PM], Wednesday: [9:30 AM-5:30 PM], Thursday: [9:30 AM-5:30 PM], Friday: [9:30 AM-5:30 PM]'
                        ),
                    Agency(
                        name= 'Brooklyn Legal Services Corporation A',
                        image= 'https://i.ibb.co/4VpZ6M7/Legal-Services.jpg',
                        fulladdress= '1471 Fulton St, Brooklyn, NY 11216',
                        zipcode= '11216',
                        category= 'Legal services',
                        phone= '(718) 487-2300',
                        google_maps_url= 'https://www.google.com/maps?cid=15770881240783372387',
                        latitude= 40.6801304,
                        longitude= -73.9423677,
                        website= 'http://bka.org/',
                        opening_hours= 'Saturday: [Closed], Sunday: [Closed], Monday: [9 AM-5 AM], Tuesday: [9 AM-5 AM], Wednesday: [9 AM-5 AM], Thursday: [9 AM-5 AM], Friday: [9 AM-5 AM]'
                        ),
                    Agency(
                        name= 'Brooklyn Legal Services',
                        image= 'https://i.ibb.co/4VpZ6M7/Legal-Services.jpg',
                        fulladdress= '105 Court St 4th floor, Brooklyn, NY 11201',
                        zipcode= '11201',
                        category= 'Legal services',
                        phone= '(718) 237-5500',
                        google_maps_url= 'https://www.google.com/maps?cid=12164212006785197944',
                        latitude= 40.6907763,
                        longitude= -73.9915424,
                        website= 'http://www.legalservicesnyc.org/',
                        opening_hours= 'Saturday: [Closed], Sunday: [Closed], Monday: [9 AM-5 PM], Tuesday: [9 AM-5 PM], Wednesday: [9 AM-5 PM], Thursday: [9 AM-5 PM], Friday: [9 AM-5 PM]'
                        ),
                    Agency(
                        name= 'Adoption Attorney Brooklyn',
                        image= 'https://i.ibb.co/4VpZ6M7/Legal-Services.jpg',
                        fulladdress= '1462 East 100th Street #2, Brooklyn, NY 11236',
                        zipcode= '11236',
                        category= 'Legal services',
                        phone= '(347) 704-7259',
                        google_maps_url= 'https://www.google.com/maps?cid=5756223388813592320',
                        latitude= 40.6357328,
                        longitude= -73.8880889,
                        website= 'http://adoptionattorneybrooklyn.com/',
                        opening_hours= 'Saturday: [Closed], Sunday: [Closed], Monday: [9 AM-5 PM], Tuesday: [9 AM-5 PM], Wednesday: [9 AM-5 PM], Thursday: [9 AM-5 PM], Friday: [9 AM-5 PM]'
                        ),
                    Agency(
                        name= 'Brooklyn Family Defense Practice',
                        image= 'https://i.ibb.co/4VpZ6M7/Legal-Services.jpg',
                        fulladdress= '195 Montague St, Brooklyn, NY 11201',
                        zipcode= '11201',
                        category= 'Legal services',
                        phone= '(347) 592-2500',
                        google_maps_url= 'https://www.google.com/maps?cid=821211360280556098',
                        latitude= 40.6942442,
                        longitude= -73.9914468,
                        website= 'https://bds.org/our-work/family-defense',
                        opening_hours= 'Saturday: [Closed], Sunday: [Closed], Monday: [9 AM-5 PM], Tuesday: [9 AM-5 PM], Wednesday: [9 AM-5 PM], Thursday: [9 AM-5 PM], Friday: [9 AM-5 PM]'
                        ),
                    Agency(
                        name= 'The Legal Aid Society',
                        image= 'https://i.ibb.co/4VpZ6M7/Legal-Services.jpg',
                        fulladdress= '111 Livingston St 7th floor, Brooklyn, NY 11201',
                        zipcode= '11201',
                        category= 'Legal services',
                        phone= '(718) 645-3111',
                        google_maps_url= 'https://www.google.com/maps?cid=11286488704989202380',
                        latitude= 40.6914169,
                        longitude= -73.9899291,
                        website= 'https://www.legalaidnyc.org/',
                        opening_hours= 'Saturday: [Closed], Sunday: [Closed], Monday: [9 AM-5 PM], Tuesday: [9 AM-5 PM], Wednesday: [9 AM-5 PM], Thursday: [9 AM-5 PM], Friday: [9 AM-5 PM]'
                        ),
                    Agency(
                        name= 'Arab American Family Support Center Inc',
                        image= 'https://i.ibb.co/4VpZ6M7/Legal-Services.jpg',
                        fulladdress= '150 Court St # 3, Brooklyn, NY 11201',
                        zipcode= '11201',
                        category= 'Legal services',
                        phone= '(718) 643-8000',
                        google_maps_url= 'https://www.google.com/maps?cid=1516185932273235948',
                        latitude= 40.6889011,
                        longitude= -73.993003,
                        website= 'http://www.aafscny.org/',
                        opening_hours= 'Saturday: [Closed], Sunday: [Closed], Monday: [9 AM-5 PM], Tuesday: [9 AM-5 PM], Wednesday: [9 AM-5 PM], Thursday: [9 AM-5 PM], Friday: [9 AM-5 PM]'
                        ),
                    Agency(
                        name= 'Brooklyn Legal Service',
                        image= 'https://i.ibb.co/4VpZ6M7/Legal-Services.jpg',
                        fulladdress= '1709 St Marks Ave, Brooklyn, NY 11233',
                        zipcode= '11233',
                        category= 'Legal services',
                        phone= 'Not Available',
                        google_maps_url= 'https://www.google.com/maps?cid=11296803397541302497',
                        latitude= 40.6731586,
                        longitude= -73.9102233,
                        website= 'https://www.legalservicesnyc.org/our-program/brooklyn',
                        opening_hours= 'Contact  for Hours'
                        ),
                    Agency(
                        name= 'Gordon Law, P.C. - Brooklyn Family and Divorce Lawyer',
                        image= 'https://i.ibb.co/4VpZ6M7/Legal-Services.jpg',
                        fulladdress= '32 Court St #404, Brooklyn, NY 11201',
                        zipcode= '11201',
                        category= 'Legal services',
                        phone= '(347) 378-9090',
                        google_maps_url= 'https://www.google.com/maps?cid=5613972439604959784',
                        latitude= 40.6929484,
                        longitude= -73.9910376,
                        website= 'https://www.nylawyersteam.com/family-law-attorney/locations/brooklyn',
                        opening_hours= 'Saturday: [8 AM-9 PM], Sunday: [8 AM-9 PM], Monday: [8 AM-9 PM], Tuesday: [8 AM-9 PM], Wednesday: [8 AM-9 PM], Thursday: [8 AM-9 PM], Friday: [8 AM-9 PM]'
                        ),
                    Agency(
                        name= 'Central American Legal Assistance',
                        image= 'https://i.ibb.co/4VpZ6M7/Legal-Services.jpg',
                        fulladdress= '240 Hooper St, Brooklyn, NY 11211',
                        zipcode= '11211',
                        category= 'Legal services',
                        phone= '(718) 486-6800',
                        google_maps_url= 'https://www.google.com/maps?cid=15725550385722394123',
                        latitude= 40.7055045,
                        longitude= -73.9559025,
                        website= 'http://centralamericanlegal.info/',
                        opening_hours= 'Saturday: [Closed], Sunday: [Closed], Monday: [10 AM-3 PM], Tuesday: [10 AM-3 PM], Wednesday: [10 AM-3 PM], Thursday: [10 AM-3 PM], Friday: [10 AM-3 PM]'
                        ),
                    Agency(
                        name= 'Brooklyn Community Housing & Services',
                        image= 'https://i.ibb.co/Bf3Z2zk/housing-services.jpg',
                        fulladdress= '105 Carlton Ave, Brooklyn, NY 11205',
                        zipcode= '11205',
                        category= 'Housing',
                        phone= 'Not Available',
                        google_maps_url= 'https://www.google.com/maps?cid=8318725530698507136',
                        latitude= 40.6945977,
                        longitude= -73.9729832,
                        website= 'http://www.bchands.org/',
                        opening_hours= 'Saturday: [Open 24 hours], Sunday: [Open 24 hours], Monday: [Open 24 hours], Tuesday: [Open 24 hours], Wednesday: [Open 24 hours], Thursday: [Open 24 hours], Friday: [Open 24 hours]'
                        ),
                    Agency(
                        name= 'Brooklyn Community Housing & Services',
                        image= 'https://i.ibb.co/Bf3Z2zk/housing-services.jpg',
                        fulladdress= '25 Chapel St, Brooklyn, NY 11201',
                        zipcode= '11201',
                        category= 'Housing',
                        phone= '(718) 852-9322',
                        google_maps_url= 'https://www.google.com/maps?cid=16213503106913886353',
                        latitude= 40.6974405,
                        longitude= -73.9860547,
                        website= 'http://www.bchands.org/',
                        opening_hours= 'Saturday: [Closed], Sunday: [Closed], Monday: [9 AM-5 PM], Tuesday: [9 AM-5 PM], Wednesday: [9 AM-5 PM], Thursday: [9 AM-5 PM], Friday: [9 AM-5 PM]'
                        ),
                    Agency(
                        name= 'NHS Brooklyn',
                        image= 'https://i.ibb.co/Bf3Z2zk/housing-services.jpg',
                        fulladdress= '2806 Church Ave, Brooklyn, NY 11226',
                        zipcode= '11226',
                        category= 'Housing',
                        phone= '(718) 469-4679',
                        google_maps_url= 'https://www.google.com/maps?cid=17180429104745326530',
                        latitude= 40.6504819,
                        longitude= -73.951075,
                        website= 'http://www.nhsbrooklyn.org/',
                        opening_hours= 'Saturday: [Closed], Sunday: [Closed], Monday: [9 AM-5 PM], Tuesday: [9 AM-5 PM], Wednesday: [9 AM-5 PM], Thursday: [9 AM-5 PM], Friday: [9 AM-5 PM]'
                        ),
                    Agency(
                        name= 'IMPACCT Brooklyn',
                        image= 'https://i.ibb.co/Bf3Z2zk/housing-services.jpg',
                        fulladdress= '1000 Dean St #420, Brooklyn, NY 11238',
                        zipcode= '11238',
                        category= 'Housing',
                        phone= '(718) 522-2613',
                        google_maps_url= 'https://www.google.com/maps?cid=11850554638814912928',
                        latitude= 40.6777022,
                        longitude= -73.9573907,
                        website= 'http://impacctbrooklyn.org/',
                        opening_hours= 'Saturday: [Closed], Sunday: [Closed], Monday: [9 AM-5 PM], Tuesday: [9 AM-5 PM], Wednesday: [9 AM-5 PM], Thursday: [9 AM-5 PM], Friday: [9 AM-5 PM]'
                        ),
                    Agency(
                        name= 'Mutual Housing Association of New York',
                        image= 'https://i.ibb.co/Bf3Z2zk/housing-services.jpg',
                        fulladdress= '470 Vanderbilt Ave 9th fl, Brooklyn, NY 11238',
                        zipcode= '11238',
                        category= 'Housing',
                        phone= '(718) 246-8080',
                        google_maps_url= 'https://www.google.com/maps?cid=14721894583859768964',
                        latitude= 40.6830766,
                        longitude= -73.9680195,
                        website= 'http://www.mutualhousingny.org/',
                        opening_hours= 'Saturday: [Closed], Sunday: [Closed], Monday: [9 AM-5:30 PM], Tuesday: [9 AM-5:30 PM], Wednesday: [9 AM-5:30 PM], Thursday: [9 AM-5:30 PM], Friday: [9 AM-5:30 PM]'
                        ),
                    Agency(
                        name= 'HELP USA',
                        image= 'https://i.ibb.co/Bf3Z2zk/housing-services.jpg',
                        fulladdress= '350 Snediker Ave, Brooklyn, NY 11207',
                        zipcode= '11207',
                        category= 'Housing',
                        phone= '(212) 400-7000',
                        google_maps_url= 'https://www.google.com/maps?cid=11418793663054275512',
                        latitude= 40.6660129,
                        longitude= -73.9003381,
                        website= 'http://www.helpusa.org/',
                        opening_hours= 'Contact  for Hours'
                        ),
                    Agency(
                        name= 'CAMBA',
                        image= 'https://i.ibb.co/Bf3Z2zk/housing-services.jpg',
                        fulladdress= '19 Winthrop St, Brooklyn, NY 11225',
                        zipcode= '11225',
                        category= 'Housing',
                        phone= '(718) 462-8654',
                        google_maps_url= 'https://www.sgoogle.com/maps?cid=13823824192016055973',
                        latitude= 40.6566018,
                        longitude= -73.9599308,
                        website= 'http://www.camba.org/',
                        opening_hours= 'Saturday: [Closed], Sunday: [Closed], Monday: [9 AM-5 PM], Tuesday: [9 AM-5 PM], Wednesday: [9 AM-5 PM], Thursday: [9 AM-5 PM], Friday: [9 AM-5 PM]'
                        ),
                    Agency(
                        name= 'The Artel Transitional Housing Program',
                        image= 'https://i.ibb.co/Bf3Z2zk/housing-services.jpg',
                        fulladdress= '9 Malcolm X Blvd, Brooklyn, NY 11221',
                        zipcode= '11221',
                        category= 'Housing',
                        phone= '(347) 226-4169',
                        google_maps_url= 'https://www.google.com/maps?cid=8713041767854490822',
                        latitude= 40.6940834,
                        longitude= -73.9310681,
                        website= 'http://www.naicany.org/',
                        opening_hours= 'Saturday: [Open 24 hours], Sunday: [Open 24 hours], Monday: [Open 24 hours], Tuesday: [Open 24 hours], Wednesday: [Open 24 hours], Thursday: [Open 24 hours], Friday: [Open 24 hours]'
                        ),
                    Agency(
                        name= 'HousingPlus',
                        image= 'https://i.ibb.co/Bf3Z2zk/housing-services.jpg',
                        fulladdress= '315 Linwood St, Brooklyn, NY 11208',
                        zipcode= '11208',
                        category= 'Housing',
                        phone= '(212) 213-0221',
                        google_maps_url= 'https://www.google.com/maps?cid=9079684151654307642',
                        latitude= 40.6779561,
                        longitude= -73.8835093,
                        website= 'http://www.housingplusnyc.org/',
                        opening_hours= 'Saturday: [Closed], Sunday: [Closed], Monday: [9 AM-5 PM], Tuesday: [9 AM-5 PM], Wednesday: [9 AM-5 PM], Thursday: [9 AM-5 PM], Friday: [9 AM-5 PM]'
                        ),
                    Agency(
                        name= 'Partnership For the Homeless',
                        image= 'https://i.ibb.co/Bf3Z2zk/housing-services.jpg',
                        fulladdress= '100 Pennsylvania Ave # 2, Brooklyn, NY 11207',
                        zipcode= '11207',
                        category= 'Housing',
                        phone= '(718) 875-0027',
                        google_maps_url= 'https://www.google.com/maps?cid=13080119884290334244',
                        latitude= 40.675461,
                        longitude= -73.8970259,
                        website= 'http://www.partnershipforthehomeless.org/',
                        opening_hours= 'Saturday: [Closed], Sunday: [Closed], Monday: [9 AM-5 PM], Tuesday: [9 AM-5 PM], Wednesday: [9 AM-5 PM], Thursday: [9 AM-5 PM], Friday: [9 AM-5 PM]'
                        ),
                    Agency(
                        name= 'CAMBA Beyond Hunger Emergency Food Pantry',
                        image= 'https://i.ibb.co/cbDYYGc/food-services.jpg',
                        fulladdress= '21 Snyder Ave, Brooklyn, NY 11226',
                        zipcode= '11226',
                        category= 'Food',
                        phone= '(718) 282-3082',
                        google_maps_url= 'https://www.google.com/maps?cid=12007897061370423142',
                        latitude= 40.6487938,
                        longitude= -73.9572996,
                        website= 'http://www.camba.org/',
                        opening_hours= 'Saturday: [Closed], Sunday: [Closed], Monday: [Closed], Tuesday: [10 AM-1 PM], Wednesday: [Closed], Thursday: [10 AM-1 PM], Friday: [Closed]'
                        ),
                    Agency(
                        name= 'Church Avenue Merchants Block Association - Food Distribution Center',
                        image= 'https://i.ibb.co/cbDYYGc/food-services.jpg',
                        fulladdress= 'Microenterprise Loan And Assistance Program, Brooklyn, NY 11226',
                        zipcode= '11226',
                        category= 'Food',
                        phone= '(718) 287-2600',
                        google_maps_url= 'https://www.google.com/maps?cid=9752970211265887527',
                        latitude= 40.6470923,
                        longitude= -73.9536162,
                        website= 'Not Available',
                        opening_hours= 'Saturday: [Closed], Sunday: [Closed], Monday: [9 AM-5 PM], Tuesday: [9 AM-5 PM], Wednesday: [9 AM-5 PM], Thursday: [9 AM-5 PM], Friday: [9 AM-5 PM]'
                        ),
                    Agency(
                        name= 'Allen Memorial Ame Church - Food Distribution Center',
                        image= 'https://i.ibb.co/cbDYYGc/food-services.jpg',
                        fulladdress= '944 Rogers Ave, Brooklyn, NY 11226',
                        zipcode= '11226',
                        category= 'Food',
                        phone= 'Not Available',
                        google_maps_url= 'https://www.google.com/maps?cid=17014546244236460240',
                        latitude= 40.647197,
                        longitude= -73.952403,
                        website= 'Not Available',
                        opening_hours= 'Contact  for Hours'
                        ),
                    Agency(
                        name= 'Fernande Valme Ministries - Food Distribution Center',
                        image= 'https://i.ibb.co/cbDYYGc/food-services.jpg',
                        fulladdress= '1120 Flatbush Ave, Brooklyn, NY 11226',
                        zipcode= '11226',
                        category= 'Food',
                        phone= '(718) 284-1809',
                        google_maps_url= 'https://www.google.com/maps?cid=7601536480353983217',
                        latitude= 40.643087,
                        longitude= -73.9579119,
                        website= 'Not Available',
                        opening_hours= 'Saturday: [Closed], Sunday: [Closed], Monday: [Closed], Tuesday: [Closed], Wednesday: [Closed], Thursday: [10-11 AM], Friday: [Closed]'
                        ),
                    Agency(
                        name= 'Goke Food Pantry',
                        image= 'https://i.ibb.co/cbDYYGc/food-services.jpg',
                        fulladdress= '632 Cortelyou Rd, Brooklyn, NY 11218',
                        zipcode= '11218',
                        category= 'Food',
                        phone= '(718) 713-4002',
                        google_maps_url= 'https://www.google.com/maps?cid=18207269205603783959',
                        latitude= 40.638429,
                        longitude= -73.9719396,
                        website= 'http://gokefoodpantry.org/',
                        opening_hours= 'Saturday: [Closed], Sunday: [Closed], Monday: [Closed], Tuesday: [5-7:30 PM], Wednesday: [Closed], Thursday: [Closed], Friday: [Closed]'
                        ),
                    Agency(
                        name= 'Beyond Hunger Emergency Food Pantry - Food Distribution Center',
                        image= 'https://i.ibb.co/cbDYYGc/food-services.jpg',
                        fulladdress= '2241 Church Ave, Brooklyn, NY 11226',
                        zipcode= '11226',
                        category= 'Food',
                        phone= '(718) 282-3082',
                        google_maps_url= 'https://www.google.com/maps?cid=8829163822432246483',
                        latitude= 40.6506792,
                        longitude= -73.9573622,
                        website= 'Not Available',
                        opening_hours= 'Contact  for Hours'
                        ),
                    Agency(
                        name= 'The Campaign Against Hunger',
                        image= 'https://i.ibb.co/cbDYYGc/food-services.jpg',
                        fulladdress= '2010 Fulton St, Brooklyn, NY 11233',
                        zipcode= '11233',
                        category= 'Food',
                        phone= 'Not Available',
                        google_maps_url= 'https://www.google.com/maps?cid=11650636839449530757',
                        latitude= 40.6784694,
                        longitude= -73.9181397,
                        website= 'http://tcahnyc.org/',
                        opening_hours= 'Saturday: [Closed], Sunday: [Closed], Monday: [9:30 AM-5:30 PM], Tuesday: [9:30 AM-5:30 PM], Wednesday: [9:30 AM-5:30 PM], Thursday: [9:30 AM-5:30 PM], Friday: [9:30 AM-5:30 PM]'
                        ),
                    Agency(
                        name= 'More Grace Redemptive Center - Food Distribution Center',
                        image= 'https://i.ibb.co/cbDYYGc/food-services.jpg',
                        fulladdress= '646 Parkside Ave, Brooklyn, NY 11226',
                        zipcode= '11226',
                        category= 'Food',
                        phone= '(718) 693-7074',
                        google_maps_url= 'https://www.google.com/maps?cid=17644718151523193715',
                        latitude= 40.6559787,
                        longitude= -73.9517121,
                        website= 'http://more-grace.org/',
                        opening_hours= 'Contact  for Hours'
                        ),
                    Agency(
                        name='Brooklyn Rescue Mission Urban Harvest Center',
                        image= 'https://i.ibb.co/cbDYYGc/food-services.jpg',
                        fulladdress='426 Decatur St, Brooklyn, NY 11233',
                        zipcode='11233',
                        category='Food',
                        phone='(917) 426-3001',
                        google_maps_url='https://www.google.com/maps?cid=11314611731062054352',
                        latitude= 40.6821881,
                        longitude= -73.9257785,
                        website='http://www.brmuhc.org/',
                        opening_hours='Saturday: [Closed], Sunday: [Closed], Monday: [Closed], Tuesday: [10-11:30 AM], Wednesday: [10-11:30 AM], Thursday: [Closed], Friday: [Closed]'
                    ),
                    Agency(
                        name='Neighbors Together Corporation',
                        image= 'https://i.ibb.co/cbDYYGc/food-services.jpg',
                        fulladdress='2094 Fulton St, Brooklyn, NY 11233',
                        zipcode='11233',
                        category='Food',
                        phone='(718) 498-7256',
                        google_maps_url='https://www.google.com/maps?cid=7721512164336632970',
                        latitude= 40.6782875,
                        longitude= -73.9138412,
                        website='http://www.neighborstogether.org/',
                        opening_hours='Saturday: [Closed], Sunday: [Closed], Monday: [9 AM-6 PM], Tuesday: [9 AM-6 PM], Wednesday: [9 AM-6 PM], Thursday: [9 AM-6 PM], Friday: [9 AM-6 PM]'
                    )
                ]

        # consultations = [
        #     Consultation(
        #         name="0",
        #         email="0",
        #         message="0",
        #         agency_id='1'
                
        #     )
        # ]

#add all changes to the current session
        db.session.add_all(agencies)
        

# Commit the changes to the database
        db.session.commit()