'use client';

import {Grabber} from '@/app/home/components/grabber';
import { Button, ButtonGroup } from '@nextui-org/react';
import { signIn, useSession } from 'next-auth/react';

export default function Home() {
	const { data: session } = useSession();

	return (
		<section className='flex flex-col items-center text-6xl justify-center'>
			{session ? <Grabber/> : (
				<ButtonGroup className='flex justify-center items-center h-[80vh]'>
					<Button onClick={() => signIn('github')}>
						Sign in with GitHub
					</Button>
				</ButtonGroup>
			)}
		</section>
	);
}
