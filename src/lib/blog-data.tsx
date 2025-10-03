import React from 'react'

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: React.ReactNode
  author: {
    name: string
    title: string
    avatar: string
    bio: string
    credentials: string[]
  }
  publishDate: string
  readTime: number
  tags: string[]
  category: string
  featured: boolean
  image: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "managing-diabetes-senior-cats-comprehensive-treatment-protocol",
    title: "Managing Diabetes in Senior Cats: A Comprehensive Treatment Protocol",
    excerpt: "Learn about the latest approaches to managing diabetes in senior cats, including insulin therapy, dietary management, and monitoring techniques that can significantly improve your cat's quality of life.",
    content: (
      <div>
        <p className="text-lg text-gray-700 mb-6">
          Diabetes mellitus is one of the most common endocrine disorders in senior cats, affecting approximately 1 in 200 cats. As our feline companions age, their risk of developing this condition increases significantly. Understanding how to properly manage diabetes in senior cats is crucial for maintaining their health and quality of life.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-8">Understanding Feline Diabetes</h2>
        <p className="text-gray-700 mb-4">
          Feline diabetes occurs when the pancreas fails to produce sufficient insulin or when the body becomes resistant to insulin's effects. Senior cats are particularly susceptible due to age-related changes in pancreatic function and increased insulin resistance.
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">Early Warning Signs</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Increased thirst and urination</li>
          <li>Weight loss despite increased appetite</li>
          <li>Lethargy and decreased activity</li>
          <li>Poor coat condition</li>
          <li>Vomiting and dehydration</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-8">Treatment Protocol</h2>
        <p className="text-gray-700 mb-4">
          Successful diabetes management in senior cats requires a comprehensive approach that addresses multiple aspects of care.
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">1. Insulin Therapy</h3>
        <p className="text-gray-700 mb-4">
          Most diabetic cats require insulin injections twice daily. The type and dosage of insulin will be determined based on your cat's individual needs and response to treatment.
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">2. Dietary Management</h3>
        <p className="text-gray-700 mb-4">
          A high-protein, low-carbohydrate diet is essential for diabetic cats. This helps regulate blood glucose levels and may even lead to diabetes remission in some cases.
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">3. Regular Monitoring</h3>
        <p className="text-gray-700 mb-4">
          Close monitoring of blood glucose levels, weight, and overall health is crucial for successful diabetes management. This may include regular veterinary check-ups and at-home monitoring techniques.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-8">Quality of Life Considerations</h2>
        <p className="text-gray-700 mb-4">
          With proper management, diabetic cats can live happy, healthy lives. The key is consistency in treatment and close communication with your veterinary team.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Important Note</h3>
          <p className="text-blue-700">
            Every cat is unique, and diabetes management should be tailored to your pet's individual needs. Regular veterinary care and open communication with your veterinary team are essential for successful treatment.
          </p>
        </div>
      </div>
    ),
    author: {
      name: "Dr. Marcus Sterling",
      title: "Chief Veterinarian & Practice Director",
      avatar: "/media/veterinarians/hot-vet-1.png",
      bio: "Dr. Marcus Sterling brings 18 years of experience in advanced internal medicine and emergency care. As our Chief Veterinarian, he leads our team in providing exceptional care for complex medical cases.",
      credentials: ["DVM", "MS", "ACVIM Board Certified", "18 years experience"]
    },
    publishDate: "2024-01-15",
    readTime: 8,
    tags: ["Diabetes", "Senior Cats", "Internal Medicine", "Treatment Protocol"],
    category: "Internal Medicine",
    featured: true,
    image: "/media/pets/cat-senior.jpg"
  },
  {
    slug: "emergency-care-critical-signs-every-pet-owner-should-know",
    title: "When to Seek Emergency Care: Critical Signs Every Pet Owner Should Know",
    excerpt: "Recognize the warning signs that require immediate veterinary attention. Learn to distinguish between urgent and non-urgent situations to ensure your pet receives timely care.",
    content: (
      <div>
        <p className="text-lg text-gray-700 mb-6">
          As pet owners, we all want to provide the best care for our beloved companions. However, knowing when a situation requires immediate emergency veterinary attention can be challenging. Understanding the critical signs that demand urgent care can literally save your pet's life.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-8">Immediate Emergency Signs</h2>
        <p className="text-gray-700 mb-4">
          These signs require immediate veterinary attention, regardless of the time of day or night:
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">Breathing Difficulties</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Open-mouth breathing in cats</li>
          <li>Blue or pale gums</li>
          <li>Excessive panting or gasping</li>
          <li>Choking or gagging</li>
        </ul>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">Trauma and Injury</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Visible fractures or dislocations</li>
          <li>Severe bleeding that won't stop</li>
          <li>Head trauma or unconsciousness</li>
          <li>Eye injuries or sudden blindness</li>
        </ul>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">Toxic Ingestion</h3>
        <p className="text-gray-700 mb-4">
          If you suspect your pet has ingested something toxic, don't wait for symptoms to appear. Common toxins include chocolate, grapes, onions, medications, and household chemicals.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-8">Urgent but Not Emergency</h2>
        <p className="text-gray-700 mb-4">
          These situations require prompt veterinary attention but may not need immediate emergency care:
        </p>

        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Vomiting or diarrhea lasting more than 24 hours</li>
          <li>Loss of appetite for more than 24 hours</li>
          <li>Lethargy or unusual behavior</li>
          <li>Difficulty urinating or defecating</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-8">Preparing for Emergencies</h2>
        <p className="text-gray-700 mb-4">
          Being prepared can make all the difference in an emergency situation:
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">Emergency Kit</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Emergency veterinary contact information</li>
          <li>Pet carrier or restraint equipment</li>
          <li>Basic first aid supplies</li>
          <li>Medical records and vaccination history</li>
        </ul>

        <div className="bg-red-50 border-l-4 border-red-400 p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-2">Remember</h3>
          <p className="text-red-700">
            When in doubt, it's always better to err on the side of caution. If you're unsure whether your pet's condition is an emergency, contact your veterinarian immediately. Trust your instincts - you know your pet better than anyone.
          </p>
        </div>
      </div>
    ),
    author: {
      name: "Dr. Marcus Sterling",
      title: "Chief Veterinarian & Practice Director",
      avatar: "/media/veterinarians/hot-vet-1.png",
      bio: "Dr. Marcus Sterling brings 18 years of experience in advanced internal medicine and emergency care. As our Chief Veterinarian, he leads our team in providing exceptional care for complex medical cases.",
      credentials: ["DVM", "MS", "ACVIM Board Certified", "18 years experience"]
    },
    publishDate: "2024-01-08",
    readTime: 6,
    tags: ["Emergency Care", "Pet Safety", "Critical Signs", "First Aid"],
    category: "Emergency Medicine",
    featured: false,
    image: "/media/pets/emergency-care.jpg"
  },
  {
    slug: "future-veterinary-medicine-technology-transforming-pet-care",
    title: "The Future of Veterinary Medicine: How Technology is Transforming Pet Care",
    excerpt: "Explore the cutting-edge technologies revolutionizing veterinary medicine, from AI diagnostics to telemedicine, and how these innovations are improving pet care outcomes.",
    content: (
      <div>
        <p className="text-lg text-gray-700 mb-6">
          The veterinary medicine field is experiencing unprecedented technological advancement. From artificial intelligence-powered diagnostics to telemedicine platforms, these innovations are transforming how we care for our pets and improving outcomes across the board.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-8">Artificial Intelligence in Diagnostics</h2>
        <p className="text-gray-700 mb-4">
          AI is revolutionizing diagnostic capabilities in veterinary medicine. Machine learning algorithms can now analyze medical images with remarkable accuracy, helping veterinarians detect conditions earlier and more precisely.
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">Key Applications</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Radiology image analysis for early disease detection</li>
          <li>Pathology slide analysis for cancer screening</li>
          <li>ECG interpretation for cardiac conditions</li>
          <li>Predictive analytics for treatment outcomes</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-8">Telemedicine and Remote Monitoring</h2>
        <p className="text-gray-700 mb-4">
          Telemedicine has become an essential tool in veterinary care, especially during the pandemic. Remote consultations allow for timely care while reducing stress for pets and owners.
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">Benefits of Telemedicine</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Reduced stress for anxious pets</li>
          <li>Convenient access to specialist care</li>
          <li>Follow-up care and monitoring</li>
          <li>Emergency triage and guidance</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-8">Wearable Technology</h2>
        <p className="text-gray-700 mb-4">
          Pet wearables are providing unprecedented insights into animal health and behavior. These devices can monitor vital signs, activity levels, and even detect early signs of illness.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-8">The Human-Animal Bond</h2>
        <p className="text-gray-700 mb-4">
          Technology is also strengthening the bond between pets and their owners through better communication and understanding of animal needs.
        </p>

        <div className="bg-green-50 border-l-4 border-green-400 p-6 my-8">
          <h3 className="text-lg font-semibold text-green-800 mb-2">Looking Ahead</h3>
          <p className="text-green-700">
            As technology continues to evolve, we can expect even more innovative solutions that will enhance the quality of care we provide to our beloved pets while strengthening the human-animal bond.
          </p>
        </div>
      </div>
    ),
    author: {
      name: "Dr. Marcus Sterling",
      title: "Chief Veterinarian & Practice Director",
      avatar: "/media/veterinarians/hot-vet-1.png",
      bio: "Dr. Marcus Sterling brings 18 years of experience in advanced internal medicine and emergency care. As our Chief Veterinarian, he leads our team in providing exceptional care for complex medical cases.",
      credentials: ["DVM", "MS", "ACVIM Board Certified", "18 years experience"]
    },
    publishDate: "2024-01-22",
    readTime: 7,
    tags: ["Technology", "Innovation", "Future of Medicine", "AI Diagnostics"],
    category: "Practice Innovation",
    featured: false,
    image: "/media/medical-equipment/technology-vet.jpg"
  },
  {
    slug: "acl-tears-dogs-understanding-injury-treatment-options",
    title: "ACL Tears in Dogs: Understanding the Injury and Treatment Options",
    excerpt: "Learn about anterior cruciate ligament (ACL) tears in dogs, including causes, symptoms, and the latest surgical treatment options to restore your dog's mobility and quality of life.",
    content: (
      <div>
        <p className="text-lg text-gray-700 mb-6">
          Anterior cruciate ligament (ACL) tears are one of the most common orthopedic injuries in dogs, particularly in active and athletic breeds. Understanding this condition and the available treatment options is crucial for ensuring your dog's long-term mobility and comfort.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-8">What is an ACL Tear?</h2>
        <p className="text-gray-700 mb-4">
          The anterior cruciate ligament is a crucial stabilizing structure in the knee joint. When this ligament tears, it causes instability, pain, and progressive arthritis if left untreated.
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">Common Causes</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Sudden twisting or pivoting movements</li>
          <li>Jumping from heights</li>
          <li>Overweight or obese dogs</li>
          <li>Genetic predisposition in certain breeds</li>
          <li>Age-related degeneration</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-8">Recognizing the Signs</h2>
        <p className="text-gray-700 mb-4">
          Early recognition of ACL injury signs can lead to better treatment outcomes:
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">Acute Signs</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Sudden lameness or limping</li>
          <li>Reluctance to bear weight on the affected leg</li>
          <li>Swelling around the knee joint</li>
          <li>Pain when the knee is touched or manipulated</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-8">Treatment Options</h2>
        <p className="text-gray-700 mb-4">
          The treatment approach depends on several factors including the dog's size, age, activity level, and the severity of the injury.
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">Surgical Options</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li><strong>TPLO (Tibial Plateau Leveling Osteotomy):</strong> Most common for larger dogs</li>
          <li><strong>TTA (Tibial Tuberosity Advancement):</strong> Alternative technique for certain cases</li>
          <li><strong>Extracapsular Repair:</strong> Often used for smaller dogs</li>
        </ul>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">Conservative Management</h3>
        <p className="text-gray-700 mb-4">
          For some dogs, especially smaller breeds or those with partial tears, conservative management may be appropriate:
        </p>

        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Weight management and diet modification</li>
          <li>Physical therapy and rehabilitation</li>
          <li>Anti-inflammatory medications</li>
          <li>Activity restriction and controlled exercise</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-8">Recovery and Rehabilitation</h2>
        <p className="text-gray-700 mb-4">
          Post-surgical recovery typically takes 8-12 weeks, with strict activity restriction during the initial healing phase.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Important Note</h3>
          <p className="text-blue-700">
            Early intervention is key to preventing secondary complications. If you suspect your dog has an ACL injury, consult with your veterinarian promptly to discuss the best treatment approach for your pet's specific situation.
          </p>
        </div>
      </div>
    ),
    author: {
      name: "Dr. Alexander Blackwood",
      title: "Senior Associate Veterinarian",
      avatar: "/media/veterinarians/hot-vet-2.png",
      bio: "Dr. Alexander Blackwood is a board-certified surgeon specializing in orthopedic surgery and pain management. With 12 years of experience, he brings exceptional expertise to complex surgical cases.",
      credentials: ["DVM", "DACVS", "12 years experience", "Board Certified Surgeon"]
    },
    publishDate: "2024-01-12",
    readTime: 9,
    tags: ["ACL Tear", "Orthopedic Surgery", "Dog Health", "Surgical Treatment"],
    category: "Orthopedic Surgery",
    featured: false,
    image: "/media/pets/dog-surgery.jpg"
  },
  {
    slug: "recognizing-pain-pet-signs-never-ignore",
    title: "Recognizing Pain in Your Pet: Signs You Should Never Ignore",
    excerpt: "Learn to identify the subtle and not-so-subtle signs of pain in your pet. Early recognition leads to better treatment outcomes and improved quality of life.",
    content: (
      <div>
        <p className="text-lg text-gray-700 mb-6">
          Animals are masters at hiding pain, a survival instinct that served their wild ancestors well. However, this natural behavior can make it challenging for pet owners to recognize when their beloved companion is suffering. Understanding the signs of pain in pets is crucial for ensuring timely veterinary care.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-8">Why Pets Hide Pain</h2>
        <p className="text-gray-700 mb-4">
          In the wild, showing signs of weakness or pain can make an animal vulnerable to predators. This instinct remains strong in our domestic pets, making it essential for owners to be vigilant observers.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-8">Behavioral Changes</h2>
        <p className="text-gray-700 mb-4">
          Changes in behavior are often the first indicators of pain in pets:
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">Activity Level Changes</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Reluctance to jump or climb stairs</li>
          <li>Decreased interest in play or exercise</li>
          <li>Sleeping more than usual</li>
          <li>Difficulty getting up or lying down</li>
        </ul>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">Social Behavior Changes</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Withdrawal from family members</li>
          <li>Increased aggression or irritability</li>
          <li>Seeking more attention than usual</li>
          <li>Changes in interaction with other pets</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-8">Physical Signs</h2>
        <p className="text-gray-700 mb-4">
          Physical manifestations of pain can be more obvious but are often overlooked:
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">Posture and Movement</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Hunched or tense posture</li>
          <li>Limping or favoring a limb</li>
          <li>Difficulty with normal movements</li>
          <li>Restlessness or inability to get comfortable</li>
        </ul>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">Facial Expressions</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Squinting or half-closed eyes</li>
          <li>Flattened ears</li>
          <li>Tense facial muscles</li>
          <li>Dilated pupils</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-8">Appetite and Grooming</h2>
        <p className="text-gray-700 mb-4">
          Changes in eating and grooming habits can indicate pain:
        </p>

        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Loss of appetite or difficulty eating</li>
          <li>Excessive grooming of a specific area</li>
          <li>Neglecting grooming altogether</li>
          <li>Drooling or difficulty swallowing</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-8">Pain Assessment Tools</h2>
        <p className="text-gray-700 mb-4">
          Veterinarians use various pain assessment scales to evaluate and monitor pain in pets. These tools help ensure appropriate pain management throughout treatment.
        </p>

        <div className="bg-red-50 border-l-4 border-red-400 p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-2">When to Seek Help</h3>
          <p className="text-red-700">
            If you notice any of these signs or have concerns about your pet's comfort, don't wait. Early intervention can prevent pain from becoming chronic and improve your pet's quality of life significantly.
          </p>
        </div>
      </div>
    ),
    author: {
      name: "Dr. Alexander Blackwood",
      title: "Senior Associate Veterinarian",
      avatar: "/media/veterinarians/hot-vet-2.png",
      bio: "Dr. Alexander Blackwood is a board-certified surgeon specializing in orthopedic surgery and pain management. With 12 years of experience, he brings exceptional expertise to complex surgical cases.",
      credentials: ["DVM", "DACVS", "12 years experience", "Board Certified Surgeon"]
    },
    publishDate: "2024-01-05",
    readTime: 7,
    tags: ["Pain Management", "Pet Health", "Behavioral Signs", "Quality of Life"],
    category: "Pain Management",
    featured: false,
    image: "/media/pets/pet-pain-assessment.jpg"
  },
  {
    slug: "hip-dysplasia-diagnosis-recovery-complete-guide",
    title: "Hip Dysplasia: From Diagnosis to Recovery - A Complete Guide",
    excerpt: "Comprehensive guide to understanding hip dysplasia in dogs, including diagnostic procedures, treatment options, and what to expect during the recovery process.",
    content: (
      <div>
        <p className="text-lg text-gray-700 mb-6">
          Hip dysplasia is one of the most common orthopedic conditions affecting dogs, particularly large and giant breeds. This comprehensive guide will help you understand the condition, diagnostic process, and treatment options available for your beloved companion.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-8">What is Hip Dysplasia?</h2>
        <p className="text-gray-700 mb-4">
          Hip dysplasia is a developmental condition where the hip joint doesn't form properly, leading to instability, pain, and eventually arthritis. The condition can range from mild to severe and may affect one or both hips.
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">Risk Factors</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Genetic predisposition (most important factor)</li>
          <li>Large and giant breed dogs</li>
          <li>Rapid growth during puppyhood</li>
          <li>Excessive exercise in young dogs</li>
          <li>Obesity</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-8">Recognizing the Signs</h2>
        <p className="text-gray-700 mb-4">
          Early recognition of hip dysplasia signs can lead to better treatment outcomes:
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">Early Signs (Puppies)</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Bunny hopping gait</li>
          <li>Reluctance to jump or climb stairs</li>
          <li>Stiffness after rest</li>
          <li>Difficulty rising from lying position</li>
        </ul>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">Advanced Signs (Adult Dogs)</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Limping or lameness</li>
          <li>Decreased activity level</li>
          <li>Muscle loss in hindquarters</li>
          <li>Audible clicking or popping sounds</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-8">Diagnostic Process</h2>
        <p className="text-gray-700 mb-4">
          Accurate diagnosis requires a combination of physical examination and imaging studies:
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">Physical Examination</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Gait analysis and lameness assessment</li>
          <li>Range of motion testing</li>
          <li>Ortolani and Barlow tests</li>
          <li>Muscle mass evaluation</li>
        </ul>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">Imaging Studies</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Radiographs (X-rays) of the hip joints</li>
          <li>PennHIP evaluation for early detection</li>
          <li>CT or MRI for complex cases</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-8">Treatment Options</h2>
        <p className="text-gray-700 mb-4">
          Treatment approach depends on the dog's age, severity of the condition, and overall health:
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">Conservative Management</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Weight management and diet modification</li>
          <li>Controlled exercise and physical therapy</li>
          <li>Anti-inflammatory medications</li>
          <li>Joint supplements and nutraceuticals</li>
        </ul>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">Surgical Options</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li><strong>Total Hip Replacement (THR):</strong> Gold standard for severe cases</li>
          <li><strong>Femoral Head Ostectomy (FHO):</strong> Pain relief procedure</li>
          <li><strong>Triple Pelvic Osteotomy (TPO):</strong> For young dogs with early signs</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-8">Recovery and Rehabilitation</h2>
        <p className="text-gray-700 mb-4">
          Post-surgical recovery requires careful management and patience:
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">Recovery Timeline</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Initial healing: 6-8 weeks</li>
          <li>Full recovery: 3-6 months</li>
          <li>Physical therapy: Ongoing</li>
          <li>Follow-up evaluations: Regular intervals</li>
        </ul>

        <div className="bg-green-50 border-l-4 border-green-400 p-6 my-8">
          <h3 className="text-lg font-semibold text-green-800 mb-2">Success Story</h3>
          <p className="text-green-700">
            With proper treatment and management, most dogs with hip dysplasia can lead happy, active lives. Early intervention and a comprehensive treatment plan are key to success.
          </p>
        </div>
      </div>
    ),
    author: {
      name: "Dr. Alexander Blackwood",
      title: "Senior Associate Veterinarian",
      avatar: "/media/veterinarians/hot-vet-2.png",
      bio: "Dr. Alexander Blackwood is a board-certified surgeon specializing in orthopedic surgery and pain management. With 12 years of experience, he brings exceptional expertise to complex surgical cases.",
      credentials: ["DVM", "DACVS", "12 years experience", "Board Certified Surgeon"]
    },
    publishDate: "2024-01-19",
    readTime: 10,
    tags: ["Hip Dysplasia", "Orthopedic Surgery", "Dog Health", "Recovery"],
    category: "Orthopedic Surgery",
    featured: false,
    image: "/media/pets/dog-hip-dysplasia.jpg"
  },
  {
    slug: "complete-care-guide-african-grey-parrots-health-nutrition-behavior",
    title: "Complete Care Guide for African Grey Parrots: Health, Nutrition, and Behavior",
    excerpt: "Comprehensive guide to caring for African Grey Parrots, covering their unique health needs, nutritional requirements, and behavioral considerations for optimal well-being.",
    content: (
      <div>
        <p className="text-lg text-gray-700 mb-6">
          African Grey Parrots are among the most intelligent and captivating companion birds, known for their remarkable cognitive abilities and complex social needs. Proper care requires understanding their unique requirements for health, nutrition, and behavioral enrichment.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-8">Understanding African Grey Parrots</h2>
        <p className="text-gray-700 mb-4">
          African Greys are highly intelligent birds with complex emotional and social needs. They require significant mental stimulation, social interaction, and specialized care to thrive in captivity.
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">Key Characteristics</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Exceptional intelligence and problem-solving abilities</li>
          <li>Complex vocal communication and mimicry</li>
          <li>Strong social bonds and flock behavior</li>
          <li>Long lifespan (50+ years with proper care)</li>
          <li>Sensitive to environmental changes and stress</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-8">Health Considerations</h2>
        <p className="text-gray-700 mb-4">
          African Greys are prone to several health conditions that require vigilant monitoring and preventive care:
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">Common Health Issues</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li><strong>Psittacine Beak and Feather Disease (PBFD):</strong> Viral condition affecting feathers and beak</li>
          <li><strong>Aspergillosis:</strong> Fungal respiratory infection</li>
          <li><strong>Calcium deficiency:</strong> Leading to egg binding and bone problems</li>
          <li><strong>Behavioral issues:</strong> Feather plucking and self-mutilation</li>
          <li><strong>Heavy metal toxicity:</strong> From inappropriate cage materials</li>
        </ul>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">Preventive Care</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Annual veterinary examinations</li>
          <li>Regular blood work and health screenings</li>
          <li>Proper nutrition and supplementation</li>
          <li>Environmental enrichment and stress reduction</li>
          <li>Safe cage materials and toys</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-8">Nutritional Requirements</h2>
        <p className="text-gray-700 mb-4">
          Proper nutrition is crucial for African Grey health and longevity:
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">Diet Components</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li><strong>High-quality pellets:</strong> 60-70% of daily diet</li>
          <li><strong>Fresh vegetables:</strong> Dark leafy greens, carrots, sweet potatoes</li>
          <li><strong>Limited fruits:</strong> Berries, apples, and other low-sugar options</li>
          <li><strong>Healthy fats:</strong> Nuts and seeds in moderation</li>
          <li><strong>Calcium supplementation:</strong> Essential for bone health</li>
        </ul>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">Foods to Avoid</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Avocado (toxic to birds)</li>
          <li>Chocolate and caffeine</li>
          <li>High-fat or salty foods</li>
          <li>Alcohol and tobacco</li>
          <li>Seeds from fruits (apple, cherry, etc.)</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-8">Behavioral Health</h2>
        <p className="text-gray-700 mb-4">
          African Greys require significant mental stimulation and social interaction to prevent behavioral problems:
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">Environmental Enrichment</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Large, appropriately sized cage with multiple perches</li>
          <li>Rotating selection of toys and puzzles</li>
          <li>Foraging opportunities and food puzzles</li>
          <li>Regular out-of-cage time and exercise</li>
          <li>Social interaction and training sessions</li>
        </ul>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">Training and Socialization</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Positive reinforcement training methods</li>
          <li>Regular handling and socialization</li>
          <li>Mental challenges and problem-solving activities</li>
          <li>Consistent daily routines and schedules</li>
          <li>Respect for the bird's boundaries and preferences</li>
        </ul>

        <div className="bg-purple-50 border-l-4 border-purple-400 p-6 my-8">
          <h3 className="text-lg font-semibold text-purple-800 mb-2">Expert Tip</h3>
          <p className="text-purple-700">
            African Greys thrive on routine and consistency. Establishing a predictable daily schedule for feeding, playtime, and rest can significantly reduce stress and behavioral issues.
          </p>
        </div>
      </div>
    ),
    author: {
      name: "Dr. Sebastian Cross",
      title: "Exotic Pet Specialist",
      avatar: "/media/veterinarians/hot-vet-3.png",
      bio: "Dr. Sebastian Cross is a board-certified exotic pet specialist with 10 years of experience in avian and reptile medicine. His passion for exotic animals drives his commitment to providing exceptional care.",
      credentials: ["DVM", "ABVP", "10 years experience", "Exotic Pet Specialist"]
    },
    publishDate: "2024-01-10",
    readTime: 12,
    tags: ["African Grey Parrot", "Avian Medicine", "Exotic Pets", "Bird Care"],
    category: "Avian Medicine",
    featured: false,
    image: "/media/pets/african-grey-parrot.jpg"
  },
  {
    slug: "bearded-dragon-care-hatchling-adult-comprehensive-guide",
    title: "Bearded Dragon Care: From Hatchling to Adult - A Comprehensive Guide",
    excerpt: "Complete guide to caring for bearded dragons at every life stage, including habitat setup, nutrition, health monitoring, and common health issues.",
    content: (
      <div>
        <p className="text-lg text-gray-700 mb-6">
          Bearded dragons are among the most popular reptile pets, known for their docile nature and relatively easy care requirements. However, proper care requires understanding their specific needs at different life stages and providing appropriate environmental conditions.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-8">Life Stages and Care Requirements</h2>
        <p className="text-gray-700 mb-4">
          Bearded dragons have different care requirements as they grow from hatchlings to adults. Understanding these changes is crucial for their health and well-being.
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">Hatchling Stage (0-6 months)</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>High protein diet (80% insects, 20% vegetables)</li>
          <li>Multiple small meals daily</li>
          <li>Higher basking temperatures (105-110°F)</li>
          <li>Smaller enclosure to reduce stress</li>
          <li>Frequent handling to promote socialization</li>
        </ul>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">Juvenile Stage (6-18 months)</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Balanced diet (60% insects, 40% vegetables)</li>
          <li>Daily feeding with variety</li>
          <li>Moderate basking temperatures (100-105°F)</li>
          <li>Larger enclosure with more climbing opportunities</li>
          <li>Continued socialization and handling</li>
        </ul>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">Adult Stage (18+ months)</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Plant-based diet (80% vegetables, 20% insects)</li>
          <li>Every other day feeding</li>
          <li>Standard basking temperatures (95-100°F)</li>
          <li>Large enclosure with diverse environmental features</li>
          <li>Regular health monitoring and veterinary care</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-8">Habitat Setup</h2>
        <p className="text-gray-700 mb-4">
          Proper habitat setup is essential for bearded dragon health and well-being:
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">Enclosure Requirements</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li><strong>Size:</strong> Minimum 40-gallon tank for adults</li>
          <li><strong>Substrate:</strong> Reptile carpet, tile, or paper towels</li>
          <li><strong>Lighting:</strong> UVB bulb (10-12 hours daily)</li>
          <li><strong>Heating:</strong> Basking spot and cool zone</li>
          <li><strong>Humidity:</strong> 30-40% relative humidity</li>
        </ul>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">Environmental Features</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Multiple basking spots at different heights</li>
          <li>Hiding places and shelters</li>
          <li>Climbing branches and rocks</li>
          <li>Shallow water dish for drinking and soaking</li>
          <li>Safe, non-toxic plants for enrichment</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-8">Nutrition and Feeding</h2>
        <p className="text-gray-700 mb-4">
          Proper nutrition is crucial for bearded dragon health at every life stage:
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">Staple Foods</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li><strong>Insects:</strong> Crickets, dubia roaches, mealworms</li>
          <li><strong>Vegetables:</strong> Collard greens, mustard greens, squash</li>
          <li><strong>Fruits:</strong> Berries, melon, papaya (occasional treats)</li>
          <li><strong>Supplements:</strong> Calcium and multivitamin powders</li>
        </ul>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">Feeding Guidelines</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Feed appropriate-sized prey (no larger than space between eyes)</li>
          <li>Dust insects with calcium supplement</li>
          <li>Provide fresh vegetables daily</li>
          <li>Remove uneaten food to prevent spoilage</li>
          <li>Monitor weight and adjust feeding accordingly</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-8">Common Health Issues</h2>
        <p className="text-gray-700 mb-4">
          Bearded dragons are susceptible to several health conditions that require prompt veterinary attention:
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">Metabolic Bone Disease</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Caused by calcium deficiency or improper UVB lighting</li>
          <li>Signs include soft bones, deformities, and fractures</li>
          <li>Prevented with proper diet and lighting</li>
          <li>Requires immediate veterinary treatment</li>
        </ul>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">Impaction</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Blockage of the digestive tract</li>
          <li>Often caused by inappropriate substrate or oversized prey</li>
          <li>Signs include loss of appetite and lethargy</li>
          <li>May require surgical intervention</li>
        </ul>

        <div className="bg-orange-50 border-l-4 border-orange-400 p-6 my-8">
          <h3 className="text-lg font-semibold text-orange-800 mb-2">Prevention is Key</h3>
          <p className="text-orange-700">
            Most health issues in bearded dragons can be prevented with proper care, including appropriate diet, lighting, and habitat setup. Regular veterinary check-ups are essential for early detection and treatment of health problems.
          </p>
        </div>
      </div>
    ),
    author: {
      name: "Dr. Sebastian Cross",
      title: "Exotic Pet Specialist",
      avatar: "/media/veterinarians/hot-vet-3.png",
      bio: "Dr. Sebastian Cross is a board-certified exotic pet specialist with 10 years of experience in avian and reptile medicine. His passion for exotic animals drives his commitment to providing exceptional care.",
      credentials: ["DVM", "ABVP", "10 years experience", "Exotic Pet Specialist"]
    },
    publishDate: "2024-01-17",
    readTime: 11,
    tags: ["Bearded Dragon", "Reptile Care", "Exotic Pets", "Habitat Setup"],
    category: "Reptile Medicine",
    featured: false,
    image: "/media/pets/bearded-dragon.jpg"
  },
  {
    slug: "exotic-pet-emergency-care-what-to-do-before-reach-vet",
    title: "Exotic Pet Emergency Care: What to Do Before You Reach the Vet",
    excerpt: "Essential emergency care guidelines for exotic pets including birds, reptiles, and small mammals. Learn the critical first steps to take when your exotic pet needs immediate help.",
    content: (
      <div>
        <p className="text-lg text-gray-700 mb-6">
          Exotic pets have unique anatomy and physiology that require specialized emergency care approaches. Knowing what to do in the critical moments before reaching a veterinarian can make the difference between life and death for your beloved companion.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-8">General Emergency Principles</h2>
        <p className="text-gray-700 mb-4">
          While each species has specific needs, there are universal principles for exotic pet emergency care:
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">Immediate Actions</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Assess the situation and ensure your safety</li>
          <li>Remove the pet from immediate danger</li>
          <li>Provide warmth and quiet environment</li>
          <li>Contact an exotic pet veterinarian immediately</li>
          <li>Gather relevant medical history and information</li>
        </ul>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">What NOT to Do</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Don't attempt to force-feed or give water</li>
          <li>Don't use human medications without veterinary guidance</li>
          <li>Don't delay seeking professional help</li>
          <li>Don't handle the pet more than necessary</li>
          <li>Don't attempt complex procedures at home</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-8">Bird Emergency Care</h2>
        <p className="text-gray-700 mb-4">
          Birds are particularly sensitive to stress and require gentle, specialized care:
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">Common Bird Emergencies</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li><strong>Respiratory distress:</strong> Open-mouth breathing, tail bobbing</li>
          <li><strong>Trauma:</strong> Broken bones, bleeding, head injuries</li>
          <li><strong>Toxic exposure:</strong> Heavy metals, fumes, household chemicals</li>
          <li><strong>Egg binding:</strong> Difficulty laying eggs</li>
          <li><strong>Seizures:</strong> Uncontrolled movements, loss of consciousness</li>
        </ul>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">Emergency Care Steps</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Place bird in a warm, quiet, dark environment</li>
          <li>Maintain proper temperature (85-90°F for most species)</li>
          <li>Provide oxygen if available (use a mask or oxygen cage)</li>
          <li>Control bleeding with gentle pressure</li>
          <li>Transport in a secure, well-ventilated carrier</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-8">Reptile Emergency Care</h2>
        <p className="text-gray-700 mb-4">
          Reptiles have unique physiological needs that must be considered in emergency situations:
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">Common Reptile Emergencies</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li><strong>Thermal burns:</strong> From heat lamps or heating pads</li>
          <li><strong>Respiratory infections:</strong> Open-mouth breathing, mucus</li>
          <li><strong>Impaction:</strong> Blockage of the digestive tract</li>
          <li><strong>Trauma:</strong> Falls, bites, or crushing injuries</li>
          <li><strong>Dehydration:</strong> Sunken eyes, dry skin, lethargy</li>
        </ul>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">Emergency Care Steps</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Maintain appropriate temperature for the species</li>
          <li>Provide access to water if the reptile is alert</li>
          <li>Handle gently to avoid further injury</li>
          <li>Keep the reptile in a secure, escape-proof container</li>
          <li>Document the reptile's normal behavior and recent changes</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-8">Small Mammal Emergency Care</h2>
        <p className="text-gray-700 mb-4">
          Small mammals like rabbits, guinea pigs, and hamsters require specialized emergency care:
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">Common Small Mammal Emergencies</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li><strong>GI stasis:</strong> Loss of appetite, decreased fecal output</li>
          <li><strong>Dental problems:</strong> Overgrown teeth, difficulty eating</li>
          <li><strong>Respiratory distress:</strong> Labored breathing, nasal discharge</li>
          <li><strong>Trauma:</strong> Falls, bites, or crushing injuries</li>
          <li><strong>Heat stroke:</strong> Panting, lethargy, high body temperature</li>
        </ul>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">Emergency Care Steps</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Keep the animal warm and quiet</li>
          <li>Provide access to water if the animal is alert</li>
          <li>Handle gently to minimize stress</li>
          <li>Transport in a secure, well-ventilated carrier</li>
          <li>Bring any medications or supplements the pet is currently taking</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-8">Preparing for Emergencies</h2>
        <p className="text-gray-700 mb-4">
          Being prepared can save precious time in an emergency:
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">Emergency Kit Essentials</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Contact information for exotic pet veterinarians</li>
          <li>Appropriate carrier or transport container</li>
          <li>Heat source (heating pad, hot water bottle)</li>
          <li>Towels and blankets for warmth and comfort</li>
          <li>Medical records and current medication list</li>
        </ul>

        <div className="bg-red-50 border-l-4 border-red-400 p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-2">Critical Reminder</h3>
          <p className="text-red-700">
            Exotic pets often hide signs of illness until they are critically ill. If you notice any changes in behavior, appetite, or appearance, don't wait - contact your exotic pet veterinarian immediately. Early intervention can save your pet's life.
          </p>
        </div>
      </div>
    ),
    author: {
      name: "Dr. Sebastian Cross",
      title: "Exotic Pet Specialist",
      avatar: "/media/veterinarians/hot-vet-3.png",
      bio: "Dr. Sebastian Cross is a board-certified exotic pet specialist with 10 years of experience in avian and reptile medicine. His passion for exotic animals drives his commitment to providing exceptional care.",
      credentials: ["DVM", "ABVP", "10 years experience", "Exotic Pet Specialist"]
    },
    publishDate: "2024-01-25",
    readTime: 9,
    tags: ["Emergency Care", "Exotic Pets", "First Aid", "Pet Safety"],
    category: "Emergency Medicine",
    featured: false,
    image: "/media/pets/exotic-pet-emergency.jpg"
  }
]
