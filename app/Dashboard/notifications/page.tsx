import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Search, Settings } from 'lucide-react'
import view from "@/public/Action_Icon/view.svg";
import edit from "@/public/Action_Icon/edit.svg";
import trash from "@/public/Action_Icon/trash.svg";
import Image from 'next/image'
import { Label } from '@/components/ui/label'

const Notifications = () => {

    const notifications = [
        {
            category: "Positive Actions",
            actions: [
              {
                title: "Inviting Friends",
                messages: [
                  "Awesome! You just earned 3 Trust Points by inviting friends to join your group! Keep it up!",
                  "Nice move! You've invited friends to save together. Earn more points as they join and contribute!",
                ],
              },
              {
                title: "Joining and Participating in Groups",
                messages: [
                  "Welcome aboard! You’ve joined an active Ohana group and earned 3 Trust Points! Your savings journey begins!",
                  "You’ve joined multiple groups! An extra 2 Trust Points for being an active member.",
                ],
              },
              {
                title: "Making First Contribution",
                messages: [
                  "Way to go! Your first contribution is in, and you’ve earned 10 Trust Points! Keep saving!",
                ],
              },
              {
                title: "Timely Contributions and Payments",
                messages: [
                  "Right on time! You’ve made your contribution/payment on schedule and earned 5 extra Trust Points. Consistency pays!",
                  "Fantastic! Your loan installment was paid ahead of time. You’ve earned 3 bonus Trust Points!",
                ],
              },
              {
                title: "Completing Loan Payments",
                messages: [
                  "Congratulations! Your loan is fully paid off. You’ve earned a whopping 200 Trust Points for timely repayments!",
                  "You’re a rockstar! Last loan installment paid—here’s 50 Trust Points for completing it!",
                ],
              },
              {
                title: "Solidarity Pool Donation",
                messages: [
                  "Thank you for your generosity! You’ve contributed to the solidarity pool and earned 50 Trust Points for supporting your community.",
                ],
              },
            ],
        },
        {
          category: "Negative Actions",
          actions: [
            {
              title: "No Friends Invited",
              messages: [
                "Don't miss out! Invite friends before your group becomes active to avoid losing 5 Trust Points.",
              ],
            },
            {
              title: "Late Contributions or Payments",
              messages: [
                "Oops! Your contribution is late. You've lost 50 Trust Points. Pay now to avoid further penalties!",
                "Reminder! Your payment is overdue. Every day counts, and you're losing 5 Trust Points daily.",
              ],
            },
            {
              title: "Missed or Failed Reimbursements",
              messages: [
                "Uh-oh! A missed loan repayment means no new loans until you’re back on track. Rebuild your Trust Score by settling your dues.",
              ],
            },
          ],
        },
        {
          category: "Encouragement and Motivation",
          actions: [
            {
              title: "Reaching Milestones",
              messages: [
                "Milestone achieved! You’ve reached [Level 3] of your Trust Score. Keep going to unlock more rewards!",
                "You’re halfway to the next level! Just a few more actions to boost your Trust Score.",
              ],
            },
            {
              title: "General Motivation",
              messages: [
                "Keep up the great work! Every action counts towards building a stronger Trust Score and unlocking new opportunities.",
                "You’re doing amazing! Stay active and watch your Trust Score soar!",
              ],
            },
          ],
        },
        {
          category: "Level-Up Notifications",
          actions: [
            {
              title: "Level 1 to Level 2",
              messages: [
                "You’ve leveled up to Trust Level 2! Great start! Keep up the momentum to reach even higher levels.",
                "Congrats on reaching Trust Level 2! You’re building a solid foundation. Keep going to unlock more benefits!",
              ],
            },
            {
              title: "Level 2 to Level 3",
              messages: [
                "You’ve just hit Trust Level 3! Awesome progress! You’re halfway to the top—stay active and keep earning points!",
                "Well done! You’re now at Trust Level 3. Your commitment is paying off—keep pushing forward!",
              ],
            },
            {
              title: "Level 3 to Level 4",
              messages: [
                "Amazing! You’ve reached Trust Level 4! Just one more level to go. Keep saving, contributing, and building trust!",
                "Trust Level 4 unlocked! You’re in the top tier of trusted members. Keep up the excellent work to reach the final level!",
              ],
            },
            {
              title: "Level 4 to Level 5",
              messages: [
                "Congratulations! You’ve reached Trust Level 5—the highest level! You’re a star member of the Ohana community. Enjoy the perks of being at the top!",
                "Trust Level 5 achieved! You’ve reached the pinnacle of trustworthiness. Your dedication sets a great example for others!",
              ],
            },
          ],
        },
        {
          category: "Bonus Celebrations and Encouragement",
          actions: [
            {
              title: "Bonus Celebrations and Encouragement",
              messages: [
                "Fantastic! You’ve moved up a level! The journey continues—let’s see what more you can achieve!",
                "Level up complete! Keep going, and keep growing. Each level brings new rewards and opportunities!",
                "Way to go! You’re now at a higher Trust Level. Stay active, and keep climbing to maintain your top status!",
              ],
            },
          ],
        },
        {
          category: "Loan Level-Up Notifications",
          actions: [
            {
              title: "Loan Level 1 to Level 2",
              messages: [
                "Great job! You’ve unlocked Loan Level 2! With 2 successful reimbursements, you can now borrow more. Keep building your trust!",
                "Congrats on reaching Loan Level 2! Your commitment is paying off. More borrowing power awaits!",
              ],
            },
            {
              title: "Loan Level 2 to Level 3",
              messages: [
                "Fantastic! You’ve moved up to Loan Level 3 with 5 successful reimbursements! Your creditworthiness is on the rise—keep up the great work!",
                "Loan Level 3 unlocked! Your excellent repayment record just boosted your borrowing potential. Keep it going!",
              ],
            },
            {
              title: "Loan Level 3 to Level 4",
              messages: [
                "Impressive! You’ve achieved Loan Level 4 with 7 successful reimbursements! You’re one of our most trusted members now. Keep pushing for the next level!",
                "Well done! Loan Level 4 reached. Your trustworthiness opens up even more borrowing options. Keep aiming higher!",
              ],
            },
            {
              title: "Loan Level 4 to Level 5",
              messages: [
                "Outstanding! You’ve reached the top—Loan Level 5 with 10 successful reimbursements! You’re now a VIP member with the highest borrowing power.",
                "Trust pays off! You’ve unlocked Loan Level 5—the highest level possible. Your stellar repayment history sets you apart!",
              ],
            },
          ],
        },
        {
          category: "Loan Approval and Transfer Notification",
          actions: [
            {
              title: "Loan Approval and Transfer Notification",
              messages: [
                "Congratulations! Your loan has been approved, and $[amount] has been transferred to your account!",
              ],
            },
          ],
        },
        {
          category: "Friendly Reminders",
          actions: [
            {
              title: "Friendly Reminders",
              messages: [
                "Pay on time to avoid late fees and maintain your Trust Score.",
                "Complete your payments successfully to unlock higher loan levels and borrowing limits in the future.",
                "Need help? We’re here for you! Reach out through the app anytime.",
                "Happy Saving and Lending!",
              ],
            },
          ],
        },
        {
          category: "Savings Group Period End Notification",
          actions: [
            {
              title: "Savings Group Period End Notification",
              messages: [
                "Congratulations! Your savings group period has ended successfully! The group will now be archived for consultation only. You can still view all the details and transactions, but no further actions can be taken.",
              ],
            },
          ],
        },
        {
          category: "What’s Next?",
          actions: [
            {
              title: "What’s Next?",
              messages: [
                "Join a New Group: Explore our list of active savings groups and join a new one to continue your savings journey!",
                "Create a New Group: Want to keep saving with your current group members? Send us a message to request a new group, and we’ll invite everyone to join!",
                "Thank you for being a part of the Ohana community! We look forward to seeing you in the next savings adventure!",
              ],
            },
          ],
        },
    ];
      
  return (
    <div className='p-5'>
         <Card className='border-0 shadow-none flex flex-col lg:flex-row md:items-center justify-between'>
            <CardHeader className='p-0'>
                <CardTitle className='text-[32px] text-[#1A1C21]'>Notifications</CardTitle>
                <CardDescription className='text-[16px] text-[#667085]'>Here’s your Notifications Details</CardDescription>
            </CardHeader>
            <div className='flex flex-col gap-5 mt-5 lg:mt-0 lg:flex-row justify-between w-full lg:w-auto'>
                <Select>
                    <SelectTrigger className="h-[45px] rounded-lg outline-none border border-[#110D15]">
                    <SelectValue placeholder="Language: English" />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    </SelectContent>
                </Select>

                <Select>
                    <SelectTrigger className=" h-[45px] rounded-lg outline-none border border-[#110D15]">
                    <SelectValue placeholder="Notifications type: All" />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectItem value="Type">Type</SelectItem>
                    </SelectContent>
                </Select>
                <Button
                    className="h-[45px] rounded-lg flex items-center gap-2 bg-black text-white px-5"
                >
                <Settings className="text-lg" />
                    <span>Setting</span>
                </Button>
            </div>
        </Card>

        <Card className="mt-10 p-5 shadow-custom ">
            <div className="flex gap-2 flex-col lg:flex-row items-center justify-between border-b-2 border-[#DCDCDC] pb-4">
            <div className="border-2 border-[#DCDCDC] w-full lg:w-96 h-11 rounded-lg p-2 flex gap-2 items-center">
                <Search className="text-gray-400" />
                <input
                type="text"
                placeholder="Search"
                className="w-full h-full outline-none border-0 text-[#16151C33]"
                />
            </div>
            </div>

            <div>
                {notifications.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="my-6">
                        <CardTitle className="text-xl mb-4">{category.category}</CardTitle>
                        {category.actions.map((action, actionIndex) => (
                            <Card key={actionIndex} className="overflow-hidden mb-4">
                            <Table>
                                <TableHeader>
                                <TableRow className="bg-[#F7F8FA]">
                                    <TableHead className="px-4">
                                    Title: {action.title}
                                    </TableHead>
                                </TableRow>
                                </TableHeader>
                                <TableBody>
                                {action.messages.map((message, msgIndex) => (
                                    <TableRow key={msgIndex}>
                                        <TableCell>
                                            <div className="flex justify-between items-center p-2 px-4">
                                                <Label className="break-words leading-5 max-w-[90%] font-light text-[#333843]">
                                                    {message}
                                                </Label>
                                                <div className="flex gap-5">
                                                <Image className="cursor-pointer" src={view} alt="view" />
                                                <Image className="cursor-pointer" src={edit} alt="edit" />
                                                <Image className="cursor-pointer" src={trash} alt="trash" />
                                                </div>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                            </Card>
                        ))}
                    </div>
                ))}
            </div>
        </Card>
    </div>
  )
}

export default Notifications