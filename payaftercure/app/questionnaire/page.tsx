"use client"

import Link from "next/link"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, ArrowRight, CheckCircle2 } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function QuestionnairePage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
      window.scrollTo(0, 0)
    } else {
      setFormSubmitted(true)
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      window.scrollTo(0, 0)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        {!formSubmitted ? (
          <>
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold text-green-800 mb-2">Symptom Questionnaire</h1>
              <p className="text-gray-600">
                Help us understand your condition better to create a personalized treatment plan
              </p>
            </div>

            <div className="mb-8">
              <div className="flex justify-between mb-2">
                {[1, 2, 3, 4].map((step) => (
                  <div
                    key={step}
                    className={`flex items-center justify-center w-10 h-10 rounded-full ${
                      step === currentStep
                        ? "bg-green-600 text-white"
                        : step < currentStep
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    {step < currentStep ? <CheckCircle2 className="w-5 h-5" /> : step}
                  </div>
                ))}
              </div>
              <div className="relative">
                <div
                  className="absolute top-0 left-0 h-1 bg-green-600"
                  style={{ width: `${(currentStep - 1) * 33.33}%` }}
                ></div>
                <div className="h-1 w-full bg-gray-200 rounded"></div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-green-800">
                  {currentStep === 1 && "Personal Information"}
                  {currentStep === 2 && "Primary Symptoms"}
                  {currentStep === 3 && "Medical History"}
                  {currentStep === 4 && "Lifestyle & Habits"}
                </CardTitle>
                <CardDescription>
                  {currentStep === 1 && "Please provide your basic information"}
                  {currentStep === 2 && "Tell us about your main symptoms"}
                  {currentStep === 3 && "Share your relevant medical history"}
                  {currentStep === 4 && "Help us understand your daily habits"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Your first name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Your last name" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Your email address" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Your phone number" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="age">Age</Label>
                        <Input id="age" type="number" placeholder="Your age" />
                      </div>
                      <div className="space-y-2">
                        <Label>Gender</Label>
                        <RadioGroup defaultValue="female">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="male" id="male" />
                              <Label htmlFor="male">Male</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="female" id="female" />
                              <Label htmlFor="female">Female</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="other" id="other" />
                              <Label htmlFor="other">Other</Label>
                            </div>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="primarySymptom">What is your primary symptom or concern?</Label>
                      <Input id="primarySymptom" placeholder="e.g., Headaches, Skin rash, Digestive issues" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="symptomDuration">How long have you been experiencing this symptom?</Label>
                      <RadioGroup defaultValue="1-4weeks">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="lessThanWeek" id="lessThanWeek" />
                            <Label htmlFor="lessThanWeek">Less than a week</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="1-4weeks" id="1-4weeks" />
                            <Label htmlFor="1-4weeks">1-4 weeks</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="1-6months" id="1-6months" />
                            <Label htmlFor="1-6months">1-6 months</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="6months-1year" id="6months-1year" />
                            <Label htmlFor="6months-1year">6 months - 1 year</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="moreThan1year" id="moreThan1year" />
                            <Label htmlFor="moreThan1year">More than 1 year</Label>
                          </div>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="symptomSeverity">How would you rate the severity of your symptoms?</Label>
                      <RadioGroup defaultValue="moderate">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="mild" id="mild" />
                            <Label htmlFor="mild">Mild - Noticeable but doesn't affect daily activities</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="moderate" id="moderate" />
                            <Label htmlFor="moderate">Moderate - Somewhat affects daily activities</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="severe" id="severe" />
                            <Label htmlFor="severe">Severe - Significantly affects daily activities</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="verySevere" id="verySevere" />
                            <Label htmlFor="verySevere">Very Severe - Unable to perform daily activities</Label>
                          </div>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="symptomDescription">Please describe your symptoms in detail</Label>
                      <Textarea
                        id="symptomDescription"
                        placeholder="Include when they occur, what makes them better or worse, and any patterns you've noticed"
                        rows={5}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Do any of the following make your symptoms worse?</Label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                        {[
                          "Cold weather",
                          "Hot weather",
                          "Stress",
                          "Physical activity",
                          "Certain foods",
                          "Time of day",
                          "Humidity",
                          "Lack of sleep",
                        ].map((item) => (
                          <div key={item} className="flex items-center space-x-2">
                            <Checkbox id={item.replace(/\s+/g, "")} />
                            <Label htmlFor={item.replace(/\s+/g, "")}>{item}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label>Have you been diagnosed with any of the following conditions?</Label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                        {[
                          "Allergies",
                          "Asthma",
                          "Diabetes",
                          "Heart disease",
                          "Hypertension",
                          "Thyroid disorder",
                          "Autoimmune disease",
                          "Digestive disorders",
                          "Mental health condition",
                          "Cancer",
                        ].map((item) => (
                          <div key={item} className="flex items-center space-x-2">
                            <Checkbox id={item.replace(/\s+/g, "")} />
                            <Label htmlFor={item.replace(/\s+/g, "")}>{item}</Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="otherConditions">Any other medical conditions not listed above?</Label>
                      <Input id="otherConditions" placeholder="Please specify" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="medications">Are you currently taking any medications or supplements?</Label>
                      <Textarea
                        id="medications"
                        placeholder="Please list all medications, supplements, and their dosages"
                        rows={3}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="allergies">Do you have any known allergies?</Label>
                      <Input id="allergies" placeholder="Medications, foods, environmental, etc." />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="familyHistory">Family medical history</Label>
                      <Textarea
                        id="familyHistory"
                        placeholder="Please mention any significant conditions in your immediate family"
                        rows={3}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Have you tried any treatments for your current condition?</Label>
                      <RadioGroup defaultValue="yes">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="yes" id="treatmentYes" />
                            <Label htmlFor="treatmentYes">Yes</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="treatmentNo" />
                            <Label htmlFor="treatmentNo">No</Label>
                          </div>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="previousTreatments">
                        If yes, please describe previous treatments and their effectiveness
                      </Label>
                      <Textarea
                        id="previousTreatments"
                        placeholder="Include conventional medicine, other alternative therapies, etc."
                        rows={3}
                      />
                    </div>
                  </div>
                )}

                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label>How would you describe your diet?</Label>
                      <RadioGroup defaultValue="balanced">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="balanced" id="balancedDiet" />
                            <Label htmlFor="balancedDiet">Balanced (variety of foods)</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="vegetarian" id="vegetarianDiet" />
                            <Label htmlFor="vegetarianDiet">Vegetarian</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="vegan" id="veganDiet" />
                            <Label htmlFor="veganDiet">Vegan</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="glutenFree" id="glutenFreeDiet" />
                            <Label htmlFor="glutenFreeDiet">Gluten-free</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="other" id="otherDiet" />
                            <Label htmlFor="otherDiet">Other</Label>
                          </div>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="dietDetails">Please provide more details about your typical daily diet</Label>
                      <Textarea id="dietDetails" placeholder="Describe what you typically eat in a day" rows={3} />
                    </div>

                    <div className="space-y-2">
                      <Label>How would you describe your physical activity level?</Label>
                      <RadioGroup defaultValue="moderate">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="sedentary" id="sedentary" />
                            <Label htmlFor="sedentary">Sedentary (little to no exercise)</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="light" id="light" />
                            <Label htmlFor="light">Light (light exercise 1-3 days/week)</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="moderate" id="moderate" />
                            <Label htmlFor="moderate">Moderate (moderate exercise 3-5 days/week)</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="active" id="active" />
                            <Label htmlFor="active">Active (intense exercise 6-7 days/week)</Label>
                          </div>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label>How would you rate your stress level on average?</Label>
                      <RadioGroup defaultValue="moderate">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="low" id="lowStress" />
                            <Label htmlFor="lowStress">Low</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="moderate" id="moderateStress" />
                            <Label htmlFor="moderateStress">Moderate</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="high" id="highStress" />
                            <Label htmlFor="highStress">High</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="veryHigh" id="veryHighStress" />
                            <Label htmlFor="veryHighStress">Very High</Label>
                          </div>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label>How many hours of sleep do you typically get per night?</Label>
                      <RadioGroup defaultValue="6-8">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="lessThan5" id="lessThan5" />
                            <Label htmlFor="lessThan5">Less than 5 hours</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="5-6" id="5-6" />
                            <Label htmlFor="5-6">5-6 hours</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="6-8" id="6-8" />
                            <Label htmlFor="6-8">6-8 hours</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="moreThan8" id="moreThan8" />
                            <Label htmlFor="moreThan8">More than 8 hours</Label>
                          </div>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label>Do you consume any of the following?</Label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                        {["Alcohol", "Tobacco", "Caffeine", "Recreational drugs"].map((item) => (
                          <div key={item} className="flex items-center space-x-2">
                            <Checkbox id={item.replace(/\s+/g, "")} />
                            <Label htmlFor={item.replace(/\s+/g, "")}>{item}</Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="additionalInfo">
                        Is there anything else you would like to share about your health or lifestyle?
                      </Label>
                      <Textarea
                        id="additionalInfo"
                        placeholder="Any additional information that might be relevant"
                        rows={3}
                      />
                    </div>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={handlePrevStep}
                  disabled={currentStep === 1}
                  className="border-green-600 text-green-600 hover:bg-green-50"
                >
                  Previous
                </Button>
                <Button onClick={handleNextStep} className="bg-green-600 hover:bg-green-700">
                  {currentStep < 4 ? (
                    <>
                      Next
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  ) : (
                    "Submit"
                  )}
                </Button>
              </CardFooter>
            </Card>
          </>
        ) : (
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-green-800 mb-2">Thank You for Completing the Questionnaire!</h2>
            <p className="text-gray-600 mb-6">
              Our homeopathic experts will review your responses and create a personalized treatment plan for you.
            </p>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <Alert className="bg-green-50 border-green-200 mb-4">
                  <AlertCircle className="h-4 w-4 text-green-600" />
                  <AlertTitle className="text-green-800">What happens next?</AlertTitle>
                  <AlertDescription className="text-gray-600">
                    One of our homeopathic consultants will contact you within 24-48 hours to discuss your symptoms and
                    treatment options.
                  </AlertDescription>
                </Alert>

                <div className="text-left space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-green-600 font-semibold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-800">Initial Consultation</h3>
                      <p className="text-gray-600">
                        We'll schedule a detailed consultation to further understand your condition.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-green-600 font-semibold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-800">Treatment Plan</h3>
                      <p className="text-gray-600">
                        Our experts will create a personalized homeopathic treatment plan for you.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-green-600 font-semibold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-800">Begin Treatment</h3>
                      <p className="text-gray-600">
                        Start your treatment with our natural remedies and follow-up support.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-green-600 font-semibold">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-800">Pay After Cure</h3>
                      <p className="text-gray-600">
                        Only pay for your treatment after you experience improvement in your condition.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link href="/">Return to Home</Link>
              </Button>
              <Button asChild variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                <Link href="/blog">Read Success Stories</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
