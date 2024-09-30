'use client';

import { useChat } from 'ai/react';

import listItem from 'app/api/firebase/getList';
import Markdown from 'markdown-to-jsx';
import { useCallback, useEffect, useState } from 'react';
import { setKey } from 'react-geocode';
// import Maps from './_components/Map';

type Token = {
  id: string;
  role: string;
  content: string;
  createAdd: Date;
};

export default function Playground() {
  const { messages, setInput, handleSubmit, isLoading } = useChat();
  const [keywords, setKeywords] = useState('');
  const [numOfDays, setNumOfDays] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [interests, setInterests] = useState('');
  const [fatigue, setFatigue] = useState<'HARD' | 'EASY'>('HARD');
  const [places, setPlaces] = useState<string[]>([]);

  useEffect(() => {
    setKey(process.env.NEXT_PUBLIC_GOOGLE_MAP_API as string); // Your API key here.
  }, [messages]);

  useEffect(() => {
    if (!isLoading && messages?.[1] != null) {
      const { content } = messages[1];
      const SUMMARY = JSON.parse(content.slice(content.indexOf('{"0":')));
      setPlaces(Object.keys(SUMMARY).map(key => SUMMARY[key]));
    }
  }, [isLoading]);

  useEffect(() => {
    if (!isLoading) {
      console.log(messages);
    }
  }, [isLoading]);

  useEffect(() => {
    const res = listItem('countries');
    console.log(res);
  }, []);

  useEffect(() => {
    console.log(startDate, endDate);
    console.log(startDate, endDate);
  }, [endDate, startDate]);

  const handleDateRangeChange = useCallback(() => {}, [startDate, endDate]);

  return (
    <>
      <h1>this is playground</h1>
      <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
        {messages.map(({ id, content }: Token, index: number) => {
          if (index === 1) {
            return (
              <Markdown key={id}>
                {content.indexOf('{') > 0 ? content.slice(0, content.indexOf('{')) : content}
              </Markdown>
            );
          }
          return null;
        })}

        <form onSubmit={handleSubmit}>
          <input
            value={keywords}
            placeholder="키워드"
            onChange={e => {
              setKeywords(e.target.value);
              handleDateRangeChange();
            }}
          />
          시작:
          <input
            value={startDate}
            onChange={e => {
              console.log(e.target.valueAsNumber);
              setStartDate(e.target.value);
            }}
            type="date"
          />
          끝:
          <input
            value={endDate}
            onChange={e => {
              console.log(e.target.valueAsNumber);
              setEndDate(e.target.value);
            }}
            type="date"
          />
          duration: {numOfDays}
          <input
            value={interests}
            placeholder="관심사"
            onChange={e => {
              setInterests(e.target.value);
            }}
          />
          <input value={fatigue} placeholder="피로도" onChange={e => setFatigue(e.target.value as 'HARD' | 'EASY')} />
          <button
            onClick={() =>
              setInput(
                `plan a trip to ${keywords} from ${startDate} to ${endDate}. Plan must be start at ${startDate} and end at ${endDate}. Finish your answer. Include a mix of historic sites, walking, eating, and fun activities. make sure it suits for people with the following interests: ${interests}. If ${fatigue} equals to "HARD", include 7-8 activities, else 4-5. Perform google search for [place name]+in+${keywords} and events available through ${startDate} and ${endDate} in ${keywords}. Never include search results that are permanently closed.  Display as a separate list for each day, add comments (in Korean) sub-list with short explanation or important notes about the activity. Include bullet-points for start time, meals, and suggest specific recommended restaurants. Days start at 8:00 and ends in 19:00.\nFollow the exact number of days asked in the request. Don't say continue in the same format for the remaining days.\nHere is the specific output format:Day X\n\\n - Time\n - Activity\n - Comments\n \\n\n\nat the bottom of results, add all descriptions except links and location name should be in korean. Add an array of all the suggested name of places, like the following: '{"0":["name of place 1","name of place 2"],"1":["name of place 1","name of place 2","name of place 3"]}'`
                // `plan a trip to ${keywords} for ${numOfDays} days. Plan must be ${numOfDays} days long, finish your answer. Include a mix of historic sites, walking, eating, and fun activities. make sure it suits for people with the following interests: ${interests}.If ${fatigue} equals to "HARD", include 7-8 activities, else 4-5. Perform google search for [place name]+in+${keywords}. Never include search results that are permanently closed.  Display as a separate list for each day, add comments (in Korean) sub-list with short explanation or important notes about the activity. Include bullet-points for start time, meals, and suggest specific recommended restaurants. Days start at 8:00 and ends in 19:00.\nFollow the exact number of days asked in the request. Don't say continue in the same format for the remaining days.\nHere is the specific output format:Day X\n\\n - Time\n - Activity\n - Comments\n \\n\n\nat the bottom of results, add all descriptions except links and location name should be in korean. Add an array of all the suggested name of places, like the following: '{"0":["name of place 1","name of place 2"],"1":["name of place 1","name of place 2","name of place 3"]}'`
                // `plan a trip to ${keywords} for ${numOfDays} days. Plan must be ${numOfDays} days long, finish your answer. Include a mix of historic sites, walking, eating, and fun activities. make sure it suits for people with the following interests: ${interests}.If ${fatigue} equals to "HARD", include 7-8 activities, else 4-5. Perform google search for , and extract the Address. Never include search results that are permanently closed. Search url should be in the format : https://www.google.com/search?q=place+name+${keywords}. Perform a search in google maps with the keyword [${keywords}+{place_name}], keyword should be in english and all whitespace replaced with '+'. Get the direct url link to [place_name]. Ensure the URL is a direct link to the location on Google Maps. Display as a separate list for each day, add comments (in Korean) sub-list with short explanation or important notes about the activity. Include bullet-points for start time, meals, and suggest specific recommended restaurants. Days start at 8:00 and ends in 19:00.\nFollow the exact number of days asked in the request. Don't say continue in the same format for the remaining days.\nHere is the specific output format:Day X\n\\n - Time\n - Activity\n - Comments\n - google map URL \\n\n\nat the bottom of results, add all descriptions except links and location name should be in korean. Add an array of all the suggested name of places, like the following: '{"0":["name of place 1","name of place 2"],"1":["name of place 1","name of place 2","name of place 3"]}'`
              )
            }
          >
            example
          </button>
        </form>
        {/* <Maps places={places} /> */}
        {/* <Maps places={places[0]} /> */}
      </div>
    </>
  );
}
